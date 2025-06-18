function min(...args) {
    if (args.length === 0) return undefined;
    let result = args[0];
    for (let num of args) {
        if (num < result) result = num;
    }
    return result;
}
