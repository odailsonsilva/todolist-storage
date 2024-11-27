export const TaskSchema = {
    name: 'Task',
    primaryKey: '_id',
    properties: {
        _id: 'string',
        id: 'string?',
        title: 'string',
        completed: 'bool',
        synced: 'bool',
        action: 'string',
    },
};
