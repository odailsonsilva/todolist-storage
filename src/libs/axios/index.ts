import axios from 'axios';

import { BASE_URL_API } from '@/utils/constants';

export const api = axios.create({
    baseURL: BASE_URL_API,
});
