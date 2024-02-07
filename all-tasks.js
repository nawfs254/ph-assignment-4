//problem 01

function calculateMoney(ticketSale) {
    if (ticketSale >= 0) {
        const perTicket = 120;
        const guardSalary = 500;
        let totalStaff = 8;
        let salaryPerStaff = 50;
        const staffSalary = (totalStaff * salaryPerStaff);

        const totalExpense = guardSalary + staffSalary;

        const totalIncome = perTicket * ticketSale;

        const remainingBalance = totalIncome - totalExpense;
        return remainingBalance;
    }

    else {
        return "Invalid Number";
    }
}


//problem 02

function checkName(name) {
    if (typeof name == "string") {
        const specialChars = ["a", "e", "i", "o", "u", "y", "w"]
        let commonName = name.toLowerCase();

        const totalChar = commonName.length;
        const lastChar = commonName.charAt(totalChar - 1);

        if (specialChars.includes(lastChar)) {
            return "Good Name";
        }

        else {
            return "Bad Name";
        }
    }
    else {
        return "invalid";
    }

}


//problem 03

function deleteInvalids(array) {
    if (Array.isArray(array) == true) {
        let newArray = [];
        for (const elements of array) {
            if (typeof elements == "number" && !isNaN(elements)) {
                newArray.push(elements);
            }
        }

        return newArray;
    }

    else {
        return "Invalid Array";
    }

}


//problem 04

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


//problem 05
function monthlySavings(arr, livingCost) {

    if (Array.isArray(arr) == false || typeof livingCost != "number") {
        return "invalid input";
    }

    else {
        let totalEarning = 0;
        for (let payment of arr) {

            if (payment >= 3000) {
                const tax = payment * (20 / 100);
                payment = payment - tax;

                totalEarning = totalEarning + payment;
            }
            else {
                totalEarning = totalEarning + payment;
            }
        }

        let savings = totalEarning - livingCost;

        if (savings < 0) {
            return "earn more";
        }

        else {
            return savings;
        }
    }
}
