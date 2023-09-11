import actions from '/cypress/support/page/actions.js'
import verifyResult from '/cypress/support/verifyResult/verifyCounter.js'

describe('this is to test calculation app functionality', () => {
    beforeEach('Visit website', () =>{
        cy.visit(`http://localhost:3000/`)
    })

    it('test case is designed to verify that increase counter functionality is working as expected', () => {
        actions.increaseCounter();
        verifyResult.verifyCounter(11);
    });

    it('test case is designed to verify that decrease counter functionality is working as expected', () => {
        actions.decreaseCounter();
        verifyResult.verifyCounter(9);
    });

    it('test case is designed to verify that reset counter functionality is working as expected', () => {
        actions.increaseCounter(5);
        actions.resetCounter();
        verifyResult.verifyCounter(10);
    });
});