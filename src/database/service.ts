import { get, ref, set, update } from "firebase/database";
import { initializeDatabase } from "@/database/config";
import { User } from "@/models/user";

const { database } = initializeDatabase();

// Get all entities
export const getAllEntities = async <T>(path: string): Promise<Entity<T>[]> => {
    const entityRef = ref(database, path);
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

// Add a new entity
export const addEntity = async <T>(path: string, entity: Entity<T>): Promise<void> => {
    const entityRef = ref(database, `${path}/${entity.id}`);
    await set(entityRef, entity.data);
};

// Update an entity
export const updateEntity = async <T>(path: string, entityId: string, updatedEntityData: Partial<T>): Promise<void> => {
    const entityRef = ref(database, `${path}/${entityId}`);
    await update(entityRef, updatedEntityData);
};