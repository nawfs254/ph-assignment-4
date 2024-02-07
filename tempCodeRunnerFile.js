function monthlySavings(arr, livingCost) {

    if (Array.isArray(arr) == false || typeof livingCost != "number") {
        console.log("invalid input");
    }

    else {
        let totalEarning = 0;
        for (let payment of arr) {

            if (payment >= 3000) {
                totalEarning = totalEarning + payment;
            }
            else {
                const tax = payment * (20 / 100);
                payment = payment - tax;
                totalEarning = totalEarning + payment;
            }
        }

        let savings = totalEarning - livingCost;

        if (savings < 0) {
            console.log("earn more");
        }

        else {
            console.log(savings)
        }
    }
}


monthlySavings(100, [ 900 , 2700 , 3400]);