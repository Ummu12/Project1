const p=500000

const n=3
const r=7

const si=(p*n*r)/100;
const repayamount= p+si
const totalMonth= n*12

const emi= repayamount/totalMonth
console.log(Math.round(emi))