function deleteInvalids(array) {
    if(Array.isArray(array) == true){
        let newArray = [];
        for(const elements of array){
            if(typeof elements == "number"  && !isNaN(elements)){
                newArray.push(elements);
            }
        }

        return newArray;
    }

    else{
        return "Invalid Array";
    }
    
}