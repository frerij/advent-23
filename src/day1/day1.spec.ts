import day1 from './index';

let testString = `1abc2
pqr3stu8vwx
a1b2c3d4e5f
treb7uchet`

describe('On Day 1', () =>{
    it(`part1 is identity function`, ()=>{
        expect(day1.solveForPartOne(testString)).toBe(142);
    })
    // it(`part2 is identity function`, ()=>{
    //     expect(day1.solveForPartTwo(testString)).toBe('45000');
    // })
});