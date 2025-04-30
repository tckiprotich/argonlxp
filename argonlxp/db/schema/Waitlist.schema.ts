import { pgTable, serial, varchar, timestamp } from "drizzle-orm/pg-core";

/**
 * Schema definition for waitlist entries
 * Captures user information for early access requests
 */
export const waitlist = pgTable("waitlist", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  email: varchar("email", { length: 255 }).notNull().unique(),
  organization: varchar("organization", { length: 255 }),
  country: varchar("country", { length: 100 }),
  createdAt: timestamp("created_at").defaultNow(),
});

// Types for TypeScript integration
export type WaitlistEntry = typeof waitlist.$inferSelect;
export type NewWaitlistEntry = typeof waitlist.$inferInsert;
