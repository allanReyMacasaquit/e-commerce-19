// schema.ts
import { pgTable, timestamp, varchar, serial } from 'drizzle-orm/pg-core';

export const store = pgTable('store', {
	id: serial().primaryKey(),
	name: varchar('name', { length: 191 }).notNull(),
	userId: varchar('userId', { length: 191 }).notNull(),
	createdAt: timestamp('createdAt', { precision: 3, mode: 'string' })
		.defaultNow()
		.notNull(),
	updatedAt: timestamp('updatedAt', { precision: 3, mode: 'string' }).notNull(),
});
