export class Entity<T> {
    id: string;
    data: T;

    constructor( id: string, data: T ){
        this.id = id;
        this.data = data;
    }
}