function cypherPhrase(obj, str) {

    var newObj = getTransformedArray(str, function(el) {

        if (obj[el]) {
            return obj[el];
        }

        return el;
    });

    return newObj.join('');
}