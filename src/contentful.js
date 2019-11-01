import {createClient} from 'contentful';

export default createClient({
    space: process.env.REACT_APP_NOT_SECRET_CODE,
    accessToken: process.env.REACT_APP_NOT_SECRET_TOKEN
});