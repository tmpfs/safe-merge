function complex(o) {
  return !(o instanceof RegExp) && (o && (typeof(o) === 'object'));
}

function taint(source) {
  Object.defineProperty(source, '__visited',
    {value: true, enumerable: false, configurable: true});
}

function untaint(source) {
  delete source.__visited;
}

function recopy(input) {
  var ptn = input.source
    , flags = "";

  if(input.global) {
    flags += "g";
  }
  if(input.ignoreCase) {
    flags += "i";
  }
  if(input.multiline) {
    flags += "m";
  }
  return new RegExp(ptn, flags);
}

function create(source) {
  if(typeof(source.clone) === 'function') {
    return source.clone();
  }else if((source instanceof RegExp)) {
    return recopy(source); 
  }else if(complex(source)
    && source.constructor
    && (source.constructor.name !== 'Object'
    && source.constructor.name !== 'Array')) {
    return source;
  }else if(Array.isArray(source)) {
    return source.slice(0);
  }else if(complex(source)) {
    return Object.assign({}, source); 
  }

  // simple type
  return source;
}

function merge(source, ...inputs) {

  // not a complex object - nothing to be done
  if(!complex(source)) {
    return source; 
  }

  // we always create a copy
  const output = create(source);

  function recurse(source, output, key) {
    let val = source[key];

    if(complex(val)) {
      if(val.__visited) {
        untaint(val);
        throw new Error(
          `cyclical reference detected on ${key}, cannot merge`);
      }
      output[key] = loop(val, create(val));
    }else{
      output[key] = create(val);
    }
  }

  function iterate(source, output, key) {
    taint(source);
    try {
      recurse(source, output, key);
    }catch(e) {
      untaint(source);
      throw e;
    }
    untaint(source);
  }

  function loop(input, output) {
    // NOTE: input order when iterating arrays with for...in is not guaranteed
    // NOTE: however in practice it appears implementations do it in order
    for(let k in input) {
      // only merge own properties
      if(!input.hasOwnProperty(k)) {
        continue; 
      }
      iterate(input, output, k);
    }
    return output;
  }

  // you can merge multiple objects with the source
  let input, i;
  for(i = 0;i < inputs.length;i++) {
    input = inputs[i];
    // input is not a complex object, ignore it
    if(!complex(input)) {
      continue; 
    }
    loop(input, output);
  }

  return output;
}

module.exports = merge;
