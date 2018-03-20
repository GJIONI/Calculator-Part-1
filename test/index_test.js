const assert = require('assert');
const Calculate =  require('../index.js')

describe('Calculate', () => {
  
  describe('.add', () => {
	
    //'it' returns the sum of two numbers
	it('returns the value of two numbers added together', () => {
	
       //Setup phase
	   
        const inputOne = 3;
        const inputTwo = 2;
        const expected = 5;
		
		//Exercise phase
		
		 const result = Calculate.add(inputOne, inputTwo);
		 
	    //Verify phase
		 
	    assert.equal(expected, result);
		 
	});
	
  });
  
  describe('.subtract', () => {
	
    it('returns the difference of the first number minus the second number', () => {
		
		//Setup phase
		
		const inputOne = 10;
		const inputTwo = 6;
		const expected = 4;
		
		//Exercise phase
		
		const result = Calculate.subtract(inputOne, inputTwo);
		
		//Verify phase
		
		assert.equal(expected, result);
		
	});	
	
  });
  
  describe('.multiply', () => {
	 
    it('returns the product of the two numbers', () => {
		
		//Setup phase
		
		const inputOne = 7;
		const inputTwo = 8;
		const expected = 56;
		
		//Exercise phase
		
		const result = Calculate.multiply(inputOne, inputTwo);
		
		//Verify phase
		
		assert.equal(expected, result);
		
	});
    	 
  });
  
  describe('.divide', () => {
	 
    it('returns the first number divided', () => {
		 
        //Setup phase
		
		const dividend = 10;
		const divisor = 5;
		const expected = 2;
		
		//Exercise phase
		
		const result = Calculate.divide(dividend, divisor);
		
		//Verify phase
		
		assert.equal(expected, result);
		
        		
	});
	
	it('throws an error when the divisor is 0', () => {
		
		//Setup phase 
		const dividend = 8;
		const divisor = 0;
		//const expected = Error('the quotient of a number and 0 is undefined');
		
		//Exercise phase
		//const result = Calculate.divide(dividend, divisor);
		
		//Verify phase
		assert.throws(
		() => {
			Calculate.divide(dividend, divisor);
			},
			Error
			);
		
	});
    	 
  });
  
  describe('.absoluteValue', () => {
	
    it('returns the absolute value of the input number', () => {
		
		//Setup phase
		const input = -5;
		const expected = 5;
		
		//Exercise phase
		const result = Calculate.absoluteValue(input);
		
		//Verify phase 
		assert.equal(expected, result);
		
		
	});	
  });
  
});
