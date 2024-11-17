"use strict";
/* <===================== Extended Interface ================> */
const user3 = {
    id: 1,
    formatter() {
        return `This user has an id ${this.id}`;
    },
};
const bill = {
    id: 2,
    amount: 50,
    server: "localhost",
    formatter() {
        return `This user has ${this.id} and ${this.amount}`;
    },
};
function printFormatted(value) {
    console.log(value.formatter());
}
function printBill(bill) {
    console.log("server", bill.server);
    console.log(bill.formatter);
}
printFormatted(user3);
printFormatted(bill);
printBill(bill);
