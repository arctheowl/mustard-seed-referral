// app/actions.ts
"use server";
import { neon } from "@neondatabase/serverless";

export async function getData() {
  if (!process.env.DATABASE_URL) {
    throw new Error("DATABASE_URL is not defined");
  }
  const sql = neon(process.env.DATABASE_URL);
  const data = await sql`SELECT * FROM playing_with_neon ;`;
  return data;
}

export async function getCountDownTime() {
  if (!process.env.DATABASE_URL) {
    throw new Error("DATABASE_URL is not defined");
  }
  const sql = neon(process.env.DATABASE_URL);
  const data = await sql`SELECT * FROM count_down_timer ;`;
  return data;
}

//"Stage 1"
