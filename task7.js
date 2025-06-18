function createRectangle(width, height) {
    function isValid(value) {
        return typeof value === 'number' && value > 0;
    }

    if (!isValid(width) || !isValid(height)) {
        throw new Error("Невірні значення сторін.");
    }

    return {
        getPerimeter: function() {
            return 2 * (width + height);
        },
        getArea: function() {
            return width * height;
        }
    };
}
