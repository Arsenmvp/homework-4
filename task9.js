let funcs = [];

for (let i = 0; i < 3; i++) {
    funcs.push((function(index) {
        return function() {
            console.log(index);
        };
    })(i));
}

// Вивід:
funcs[0](); // 0
funcs[2](); // 2
