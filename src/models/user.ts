export class User {
    id: string;
    visibleName: string;
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;

    constructor(
        id: string,
        visibleName: string,
        firstName: string,
        lastName: string,
        email: string,
        phoneNumber: string
    ) {
        this.id = id;
        this.visibleName = visibleName;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.phoneNumber = phoneNumber;
    }
}