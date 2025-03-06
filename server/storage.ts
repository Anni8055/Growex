import { influencers, type Influencer, type InsertInfluencer } from "@shared/schema";
import { db } from "./db";
import { eq, ilike } from "drizzle-orm";

export interface IStorage {
  getInfluencers(): Promise<Influencer[]>;
  getInfluencersByCategory(category: string): Promise<Influencer[]>;
  getInfluencersByLocation(location: string): Promise<Influencer[]>;
  searchInfluencers(query: string): Promise<Influencer[]>;
}

export class DatabaseStorage implements IStorage {
  async getInfluencers(): Promise<Influencer[]> {
    return await db.select().from(influencers);
  }

  async getInfluencersByCategory(category: string): Promise<Influencer[]> {
    return await db
      .select()
      .from(influencers)
      .where(eq(influencers.category, category));
  }

  async getInfluencersByLocation(location: string): Promise<Influencer[]> {
    return await db
      .select()
      .from(influencers)
      .where(eq(influencers.location, location));
  }

  async searchInfluencers(query: string): Promise<Influencer[]> {
    const lowercaseQuery = query.toLowerCase();
    return await db
      .select()
      .from(influencers)
      .where(
        ilike(influencers.name, `%${lowercaseQuery}%`)
      );
  }
}

export const storage = new DatabaseStorage();