const input = require('sync-input');

const earnings = {
    'Bubblegum': 202,
    'Toffee': 118,
    'Ice cream': 2250,
    'Milk chocolate': 1680,
    'Doughnut': 1075,
    'Pancake': 80
};

const calculateIncome = (items) => Object.values(items).reduce((a, b) => a + b);

const printIncomeList = (obj) => {
    for (const [key, value] of Object.entries(obj)) {
        console.log(`${key}: $${value}`);
    }
};

const printIncome = (income) => console.log(`
Income: $${income}`);

console.log('Earned amount:');

printIncomeList(earnings);

printIncome(calculateIncome(earnings));
