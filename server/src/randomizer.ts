export class Randomizer {
  public static readonly operators: string[] = ['+', '-', '*', '/'];

  public static generateRandomArithmeticOperation(): string {
    const leftOperand = Math.floor((Math.random() * 9) + 1);
    const rightOperand = Math.floor((Math.random() * 9) + 1);
    const operator = this.operators[Math.floor((Math.random() * this.operators.length))];
    return leftOperand + operator + rightOperand;
  }

  public static generatePlausibleRandomDeviation(solution: number): number {
    let deviation: number;
    if (solution < 10) {
      deviation = 1;
    } else {
      deviation = 2;
    };
    if (solution < 1) {
      deviation /= 10;
    }
    if (Math.random() < 0.5) {
      deviation = -deviation;
    }
    return deviation;
  }
}