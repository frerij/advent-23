"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const day_1 = require("../day");
class Day1 extends day_1.Day {
    constructor() {
        super(1);
    }
    solveForPartOne(input) {
        let code_list = input.split(/\r?\n|\r|\n/g);
        let fixed_codes = [];
        code_list.forEach((code) => {
            let code_nums = [];
            code.split("").forEach((char) => {
                if (char.match(/[0-9]/i)) {
                    code_nums.push(char);
                }
            });
            let new_code = "";
            if (code_nums.length === 1) {
                new_code = code_nums[0] + code_nums[0];
            }
            else {
                let i = code_nums.length - 1;
                new_code = code_nums[0] + code_nums[i];
            }
            fixed_codes.push(new_code);
        });
        let sum = 0;
        fixed_codes.forEach((num) => {
            sum += parseInt(num);
        });
        return sum.toString();
    }
    solveForPartTwo(input) {
        const spelledNums = {
            one: "1",
            two: "2",
            three: "3",
            four: "4",
            five: "5",
            six: "6",
            seven: "7",
            eight: "8",
            nine: "9",
        };
        let code_list = input.split(/\r?\n|\r|\n/g);
        let fixed_codes = [];
        code_list.forEach((code) => {
            let firstNum = "";
            let secondNum = "";
            code.split("").forEach((char, i) => {
                if (char.match(/[0-9]/i)) {
                    if (firstNum === "") {
                        firstNum = char;
                    }
                    secondNum = char;
                    return;
                }
                let startingNum = this.seeIfStringStartsWithNumber(code.substring(i));
                if (startingNum !== "") {
                    if (firstNum === "") {
                        firstNum = startingNum;
                    }
                    secondNum = startingNum;
                    return;
                }
            });
            fixed_codes.push(firstNum + secondNum);
        });
        console.log(fixed_codes);
        let sum = 0;
        fixed_codes.forEach((num) => {
            sum += parseInt(num);
        });
        return sum.toString();
    }
    seeIfStringStartsWithNumber(s) {
        const spelledNums = {
            one: "1",
            two: "2",
            three: "3",
            four: "4",
            five: "5",
            six: "6",
            seven: "7",
            eight: "8",
            nine: "9",
            "": "",
        };
        return spelledNums[Object.keys(spelledNums).find((key) => {
            return s.startsWith(key);
        }) ?? ""];
    }
}
exports.default = new Day1();
