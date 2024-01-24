import { get, ref, set, update } from "firebase/database";
import { initializeDatabase } from "@/database/config";
import { User } from "@/models/user";
import { Order } from "@/models/order";
import { Entity } from "@/models/entity"

const { database } = initializeDatabase();

export const getAll = async <T>(name: string): Promise<Entity<T>[]> => {
    const entityRef = ref(database, name);
    const snapshot = await get(entityRef);
    const entities: Entity<T>[] = [];
    snapshot.forEach((childSnapshot) => {
    const entity: Entity<T> = {
        id: childSnapshot.key,
        data: childSnapshot.val() as T,
    };

    entities.push(entity);
    });

    return entities;
};

export const addUser = async <T>(user: User): Promise<void> => {
    const userEntity: Entity<User> = new Entity(user.id, user);
    addEntity("users", userEntity);
}

export const addOrder = async <T>(order: Order): Promise<void> => {
    const orderEntity: Entity<Order> = new Entity(order.id, order);
    addEntity("orders", orderEntity);
}
export const addEntity = async <T>(name: string, entity: Entity<T>): Promise<void> => {
    const entityRef = ref(database, `${name}/${entity.id}`);
    await set(entityRef, entity.data);
};

export const updateEntity = async <T>(name: string, entityId: string, updatedEntityData: Partial<T>): Promise<void> => {
    const entityRef = ref(database, `${name}/${entityId}`);
    await update(entityRef, updatedEntityData);
};