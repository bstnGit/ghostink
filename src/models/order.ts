export class Order {
    id: string;
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
