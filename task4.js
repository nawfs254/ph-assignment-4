function password(obj) {
    if (typeof obj.name == "undefined" || typeof obj.birthYear == "undefined" || typeof obj.siteName == "undefined" || obj.birthYear < 1000) {
        return "invalid";
    }

    else {
        let generatedPassword = obj.siteName + "#" + obj.name + "@" + obj.birthYear;
        let password = generatedPassword.charAt(0).toUpperCase() + generatedPassword.slice(1, generatedPassword.length);

        return password;
    }
}
