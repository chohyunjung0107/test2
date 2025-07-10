import api from '../IApi';
import type { TLogin } from '@type/login/TLogin';

//로그인
export const postLogin = (userInfo: TLogin) => api.post('/api/login', userInfo);
