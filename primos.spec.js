const {
    primeNumber
} = require('./primos');
describe('primos.js',function(){
   it('0 1 should return false.',function(){
        const result = primeNumber(0);
        expect(result).toBe(false);
   }) 
   it('given void input then should be false',function(){
        const result = primeNumber();
        expect(result).toBe(false);

   })
   it('7 should return true',function(){
        const result = primeNumber(7);
        expect(result).toBe(true);
   })
   it('10 should return false',function(){
        const result = primeNumber(10);
        expect(result).toBe(false);

   })
})