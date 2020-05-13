import { UPDATE_USER } from '../constants/appConstants';

export function updateUser(data) {
    return {
        type: UPDATE_USER,
        data: data
    }
}