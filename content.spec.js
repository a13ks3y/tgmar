const { attachTheButton } = require('./content.js');
let querySelectorLastCallParams = null;
let querySelectorAllLastCallParams = null;
let lastDocumentBodyAttachChildCall = null;
let fakeNode = {
    textContent: '666',
    style: {

    }
};    

const fakeDocument = {
    body: {
        appendChild: function (el) {
            lastDocumentBodyAttachChildCall = el;
            this.lastChild = el;
        }
    },
    createElement: () => { return fakeNode; },
    querySelector: (selector) => { 
        querySelectorLastCallParams = selector;
        return fakeNode;
    },
    querySelectorAll: (selector) => { 
        querySelectorAllLastCallParams = selector;
        return [];
    },

    addEventListener: () => {},
    removeChild: () => { fakeNode = null; },
    readyState: "complete"
};
fakeNode.parentNode = fakeDocument;
describe('Chrome extntion content script for web.telegram.org/a', () => {
    
    it('attachTheButton should return attached button element and it should has all required properties set', () => {
        const btnEl = attachTheButton(fakeDocument);
        expect(btnEl).toBeDefined();
        expect(btnEl.textContent.search('♻')).toBeGreaterThanOrEqual(0);
    }); 
    it('should actully attach the btnEl to the body', () => {
        const btnEl = attachTheButton(fakeDocument);
        expect(lastDocumentBodyAttachChildCall).toBe(btnEl);
        expect(document.body.lastChild.textContent).toBe('♻');
    });
    it('button shold has click handler which do the job', () => {
        const btnEl = attachTheButton(fakeDocument);
        expect(btnEl.onclick).toBeInstanceOf(Function);
        let pereventDefaultHasBeenCalled = false;
        const result = btnEl.onclick({ preventDefault: () => pereventDefaultHasBeenCalled = true });
        expect(result).toBeFalsy();
        expect(pereventDefaultHasBeenCalled).toBeTruthy();
        expect(querySelectorAllLastCallParams).toEqual('.badge');

        const badges = fakeDocument.querySelectorAll('.badge');
        expect(badges.length).toEqual(0);
    });
});