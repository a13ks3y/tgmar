const fs = require('fs');
describe('Misc', () => {
    it('manifest.json should match schema', () => {
        const manifest = JSON.parse(fs.readFileSync('manifest.json', 'utf-8'));
        const schema = JSON.parse(fs.readFileSync('chrome-manifest.json', 'utf-8'));
        expect(manifest).toMatchSchema(schema);
    });
})