function decypherPhrase(obj, str) {
    var newObj = {};

    for (var i in obj) {
        newObj[obj[i]] = i;
    }

    return cypherPhrase(newObj, str);
}