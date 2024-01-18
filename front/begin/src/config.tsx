
const localUser: any = localStorage.getItem('persist:root')
const user: any = JSON.parse(localUser)?.login
export const config = {
    BASE_URL: 'http://localhost:8000',
    USER_INFO: {
        USER_DETAILS: JSON.parse(user),
        TOKEN: JSON.parse(user),

    }
}