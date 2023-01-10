import { api } from './nextkit';

export default api({
    async GET({ res }) {
        console.log('bruh');

        res.throw(400, 'not today');
    },
});