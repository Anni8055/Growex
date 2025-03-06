import type { Express } from "express";
import { createServer } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express) {
  app.get("/api/influencers", async (_req, res) => {
    const influencers = await storage.getInfluencers();
    res.json(influencers);
  });

  app.get("/api/influencers/category/:category", async (req, res) => {
    const influencers = await storage.getInfluencersByCategory(req.params.category);
    res.json(influencers);
  });

  app.get("/api/influencers/location/:location", async (req, res) => {
    const influencers = await storage.getInfluencersByLocation(req.params.location);
    res.json(influencers);
  });

  app.get("/api/influencers/search", async (req, res) => {
    const query = req.query.q as string;
    if (!query) {
      return res.json([]);
    }
    const influencers = await storage.searchInfluencers(query);
    res.json(influencers);
  });

  return createServer(app);
}
