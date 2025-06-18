function digitN(k, n) {
    let str = k.toString();
    if (n > str.length) return -1;
    return parseInt(str[str.length - n]);
}
