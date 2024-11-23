// schema.ts
import { pgTable, timestamp, varchar, serial } from 'drizzle-orm/pg-core';

export const store = pgTable('store', {
	id: serial().primaryKey(),
	name: varchar('name', { length: 191 }).notNull(),
	userId: varchar('user_id', { length: 191 }).notNull(),
	createdAt: timestamp('created_at').defaultNow().notNull(),
	updatedAt: timestamp('updated_at').defaultNow().notNull(),
});
