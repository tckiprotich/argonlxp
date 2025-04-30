// Export all database schemas for easy imports throughout the application

import { waitlist as waitlistTable, type WaitlistEntry, type NewWaitlistEntry } from './Waitlist.schema';

// Re-export the table directly
export const waitlist = waitlistTable;

// Export schema tables collection
export const schemas = {
  waitlist: waitlistTable,
};

// Export types
export type {
  WaitlistEntry,
  NewWaitlistEntry,
};
