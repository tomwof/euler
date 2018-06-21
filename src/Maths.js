class Maths {
    static countDown(seq) {
        if (seq.slice(-1).pop() < 1) // bass case
            return seq;
        seq.push(seq.slice(-1).pop() - 1);
        this.countDown(seq);
        return seq;
    }
}
var mathsTest = Maths.countDown([100]);
console.log(mathsTest.toString());
