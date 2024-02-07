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
