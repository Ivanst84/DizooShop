// removeAccessToken.js
import { cookies } from 'next/headers';

export const removeAccessToken = async() => {
 cookies().delete('accessToken');
};
