class Maths
{ 
  static countDown(seq: number[])
  {
    if(seq.slice(-1).pop() < 1) // base case
      return seq;    
    seq.push(seq.slice(-1).pop()-1);
      this.countDown(seq);
    return seq;
  }

static incrementFactor(seq: number[])
{
  let n: number = seq[0];
  let n2: number = seq.slice(-1).pop()-1;
  for(let i = n2; i >= 1; i--)
    if(n % i == 0)
    {
      seq.push(i);
      return seq;
    }
}

static getFactorsOf(n:number)
{
  let seq: number[] = [n];
  while(seq.slice(-1).pop() != 1)
  seq = Maths.incrementFactor(seq);
  return seq;
}

}

var mathsTest = Maths.getFactorsOf(13195);
console.log(mathsTest.toString());