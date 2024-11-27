import { createRealmContext } from '@realm/react';

import { TaskSchema } from './Schemas/Task';
import { UserSchema } from './Schemas/User';

const config = {
    schema: [TaskSchema, UserSchema],
    schemaVersion: 11,
};

export const { RealmProvider, useObject, useQuery, useRealm } = createRealmContext(config);
