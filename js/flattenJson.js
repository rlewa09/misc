const obj = {
    "one": 1,
    "two": {
        "three": 3
    },
    "four": {
        "five": 5,
        "six": {
            "seven": 7
        },
        "eight": 8
    },
    "nine": 9
}

const flattenJson = (obj={}, res={}, appendKey='') => {
    for(key in obj) {
        if(typeof obj[key] === 'object') {
            flattenJson(obj[key], res, `${appendKey}${key}.`)
        } else {
            res[appendKey + key] = obj[key];
        }
    }
    return res;
}

const flatten = (obj, prefix=[], current={}) => {
    if(typeof(obj) === 'object' && obj != null) {
        for(const key in obj) {
            flatten(obj[key], prefix.push(key), current);
        }
    } else {
        current[prefix.join('.')] = obj;
    }
    return current;
}

console.log(flattenJson(obj));
console.log(flatten(obj));