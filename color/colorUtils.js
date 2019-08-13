function rgba2rgb(red, green, blue, alpha) {
    if (alpha != 1 && alpha !== undefined) {
        let r = Math.floor(alpha * parseInt(red + '') + (1 - alpha) * 255),
            g = Math.floor(alpha * parseInt(green + '') + (1 - alpha) * 255),
            b = Math.floor(alpha * parseInt(blue + '') + (1 - alpha) * 255);
        console.log('#' + ('0' + r.toString(16)).slice(-2) + ('0' + g.toString(16)).slice(-2) + ('0' + b.toString(16)).slice(-2));
    }
}