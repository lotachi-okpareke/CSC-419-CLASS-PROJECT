import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  // Define a table named 'tasks'
  tasks: defineTable({
    text: v.string(),     // Must be a string (e.g., "Buy groceries")
    isCompleted: v.boolean(), // Must be a boolean (true or false)
    // You can optionally add indexes for efficient lookups
  })
    // Add an index to query tasks efficiently (e.g., by isCompleted status)
    .index("by_completion", ["isCompleted"]),
  
  // You can define other tables here, e.g., 'users'
  // users: defineTable({ ... }),
});