import { createRealmContext } from '@realm/react';

import { TaskSchema } from './Schemas/Task';

const config = {
    schema: [TaskSchema],
    schemaVersion: 11,
};

export const { RealmProvider, useObject, useQuery, useRealm } = createRealmContext(config);
