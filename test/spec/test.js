/* global describe, it */

(function () {
    'use strict';

    describe('Give it some context', function () {
        describe('maybe a bit more context here', function () {
            it('should run here few assertions', function () {

            });
        });
    });


    describe('Does theez test werk?', function () {

    	beforeEach(function() {
   			this.smith = "cool";
    	});

    	it('should give me a green check mark', function () {
    		expect(this.smith).to.equal("cool");
    	});
    });


    


})();
