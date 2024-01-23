class User {
    id: string;
    visibleName: string;
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    serviceType: string;
    academicSubject: string;
    programmingLanguage: string;
    budget: string;
    count: number;
    deliveryDate: Date;
    additionalInstructions: string;
    documents: string;

    constructor(
        id: string,
        visibleName: string,
        firstName: string,
        lastName: string,
        email: string,
        phoneNumber: string,
        serviceType: string,
        academicSubject: string,
        programmingLanguage: string,
        budget: string,
        count: number,
        deliveryDate: Date,
        additionalInstructions: string,
        documents: string
    ) {
        this.id = id;
        this.visibleName = visibleName;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.serviceType = serviceType;
        this.academicSubject = academicSubject;
        this.programmingLanguage = programmingLanguage;
        this.budget = budget;
        this.count = count;
        this.deliveryDate = deliveryDate;
        this.additionalInstructions = additionalInstructions;
        this.documents = documents;
    }
}

export { User };
