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