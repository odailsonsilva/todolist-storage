import Realm from 'realm';

const TaskSchema = {
    name: 'Task',
    primaryKey: 'id',
    properties: {
        id: 'string',
        name: 'string',
        description: 'string',
        done: 'bool',
    },
};

export const realmDB = new Realm({ schema: [TaskSchema] });
