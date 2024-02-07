function checkName(name) {
    if(typeof name == "string"){
        const vowels = ["a", "e", "i", "o", "u"]
        let commonName = name.toLowerCase();

        const totalChar = commonName.length;
        const lastChar = commonName.charAt(totalChar-1);

        if(vowels.includes(lastChar)){
            return "Good Name";
        }

        else{
            return "Bad Name";
    }
    }
    else{
        return "invalid";
    }

}

