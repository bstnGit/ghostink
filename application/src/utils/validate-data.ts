/*
 * Email pattern
 */ 
const emailPattern = new RegExp(/^[A-Za-z0-9+_.-]+@[A-Za-z0-9.-]+\\.[A-Za-z]+$/);

/*
 * Password pattern
 */
const passwordPattern = new RegExp(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/);

export function validateEmail(value: string) {
    return emailPattern.test(value);
}

export function validatePassword(value: string) {
    return passwordPattern.test(value);
}