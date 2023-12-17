export interface IUser {
    id?: string;
    username: string;
    email?: string;
    password: string;
}

const API_BASE_URL = '/api';

export const registerUser = async (userData: IUser) => {
    const response = await fetch(`${API_BASE_URL}/users/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
    });
    return response.json();
};

export const loginUser = async (userData: IUser) => {
    const response = await fetch(`${API_BASE_URL}/users/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
    });
    return response.json();
};

export const callRefreshToken = async () => {
    const refresh = localStorage.getItem('refreshToken');
    // Call API to refresh token
    const response = await fetch('/api/users/refresh', {
        method: 'POST',
        headers: { 
            'Content-Type': 'application/json',
            'x-refresh-token': JSON.stringify({refresh}),
        }
    });
    return response.json();
};

