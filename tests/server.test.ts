import '../src/server';
import axios from  'axios';
import '../src/server';

describe('Endpoints', () => {
    it('Get /', async () => {
        const result = await axios.get('http://localhost:3000/');
        expect(result.status).toEqual(200);
    });
});
