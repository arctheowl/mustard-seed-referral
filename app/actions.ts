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

export async function getTicket() {
  if (!process.env.DATABASE_URL) {
    throw new Error("DATABASE_URL is not defined");
  }
  const sql = neon(process.env.DATABASE_URL);
  const data = await sql`SELECT * FROM ticket_count ;`;
  if (parseInt(data[0].ticket_number) < 0) {
    return data;
  }
  const updatedData =
    await sql`UPDATE ticket_count SET ticket_number = ticket_number - 1 WHERE id = 1;`;

  console.log(updatedData);
  return data;
}

//"Stage 1"
