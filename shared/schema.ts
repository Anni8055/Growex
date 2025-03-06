import { pgTable, text, serial, integer } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const influencers = pgTable("influencers", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  username: text("username").notNull(),
  platform: text("platform").notNull(),
  followers: integer("followers").notNull(),
  engagement: integer("engagement").notNull(),
  location: text("location").notNull(),
  category: text("category").notNull(),
  imageUrl: text("image_url").notNull(),
  bio: text("bio").notNull()
});

export const insertInfluencerSchema = createInsertSchema(influencers).omit({ 
  id: true 
});

export type InsertInfluencer = z.infer<typeof insertInfluencerSchema>;
export type Influencer = typeof influencers.$inferSelect;
