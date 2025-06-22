
import billsRaw from "./bill.json";

export interface Bill {
    date: Date,
    "original-amount"?: number,
    "original-unit"?: string,
    "exchanged-amount": number,
    target: string,
    operator: string,
    description: string,
    type: "income" | "outcome"
}

export class BillManager {
    private static bills: Bill[] = JSON.parse(JSON.stringify(billsRaw));
    public static getAvailable(): number {
        let sum: number = 0;
        for(let bill of BillManager.bills) {
            if(bill.type === "income")
                sum += bill["exchanged-amount"];
            else
                sum -= bill["exchanged-amount"];
        }
        return sum;
    }
    public static getIncomes(): number {
        let sum: number = 0;
        for(let bill of BillManager.bills) {
            if(bill.type === "income")
                sum += bill["exchanged-amount"];
        }
        return sum;
    }
    public static getOutcomes(): number {
        let sum: number = 0;
        for(let bill of BillManager.bills) {
            if(bill.type === "outcome")
                sum += bill["exchanged-amount"];
        }
        return sum;
    }
    public static getBills(): Bill[] {
        return BillManager.bills;
    }
}