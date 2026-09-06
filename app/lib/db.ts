import { PrismaClient } from "../generated/prisma";

// En dev, Next recharge les modules à chaque requête. Sans ce cache global,
// chaque rechargement ouvrirait une nouvelle connexion et SQLite finirait par
// refuser d'ouvrir la base.
const globalForPrisma = globalThis as unknown as { prisma?: PrismaClient };

export const prisma = globalForPrisma.prisma ?? new PrismaClient();

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
