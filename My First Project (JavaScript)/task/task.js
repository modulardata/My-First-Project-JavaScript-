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

const calculateNetIncome = (income, expenses) => income - expenses;
const printNetIncome = (netIncome) => console.log(`Net income: $${netIncome}`);

const printIncome = (income) => console.log(`
Income: $${income}`);

console.log('Earned amount:');
printIncomeList(earnings);
const income = calculateIncome(earnings)
printIncome(income);

const staffExpenses = Number(input('Staff expenses:'));
const otherExpenses = Number(input('Other expenses:'));
const expenses = staffExpenses + otherExpenses;
const netIncome = calculateNetIncome(income, expenses);

printNetIncome(netIncome);

