function add(a,b){
  return a + b
}
function subtract(a,b){
  return a - b
}

function multiply(a,b){
  return a * b
}

function divide(a,b){
  return a/b
}

function inc(n){
 return  n += 1
}

function dec(n){
 return  n -= 1
}

function makeInt(n){

}

describe('makeInt(n)', function() {
  it('parses n as an integer and returns the parsed integer', function() {
    expect(makeInt(a.toString())).toEqual(a)
  })
