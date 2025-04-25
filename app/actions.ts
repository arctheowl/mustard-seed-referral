// app/actions.ts
"use server";
import { neon } from "@neondatabase/serverless";

export async function getReferrals() {
  if (!process.env.DATABASE_URL) {
    throw new Error("DATABASE_URL is not defined");
  }
  const sql = neon(process.env.DATABASE_URL);
  const data = await sql`SELECT * FROM Referral_Information ;`;
  return data;
}

export async function getWaitlist() {
  if (!process.env.DATABASE_URL) {
    throw new Error("DATABASE_URL is not defined");
  }
  const sql = neon(process.env.DATABASE_URL);
  const data = await sql`SELECT * FROM waitlist ;`;
  return data;
}

export async function insertData(userInfo: any) {
  if (!process.env.DATABASE_URL) {
    throw new Error("DATABASE_URL is not defined");
  }
  const sql = neon(process.env.DATABASE_URL);
  const data =
    await sql`INSERT INTO Referral_Information(name, email, second_email, signposted, child_name, child_DOB, parent_name, sibling_names, sibling_ages, address, phone, school_name, school_year, diagnosis, diagnosis_date, medication, professionals, eligibility)
VALUES (${userInfo.name}, ${userInfo.email}, ${userInfo.second_email}, ${userInfo.signposted}, ${userInfo.child_name}, ${userInfo.child_DOB}, ${userInfo.parent_name}, ${userInfo.sibling_names}, ${userInfo.sibling_ages}, ${userInfo.address}, ${userInfo.phone}, ${userInfo.school_name}, ${userInfo.school_year}, ${userInfo.diagnosis}, ${userInfo.diagnosis_date}, ${userInfo.medication}, ${userInfo.professionals}, ${userInfo.eligibility})
RETURNING *;`;
  console.log(data);
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

export async function adjustCountDownTime(date: string) {
  if (!process.env.DATABASE_URL) {
    throw new Error("DATABASE_URL is not defined");
  }
  if (!date) {
    throw new Error("Date is not defined");
  }
  const sql = neon(process.env.DATABASE_URL);
  const response =
    await sql`UPDATE count_down_timer SET time = ${date} WHERE id = 1;`;
  return response;
}

export async function setActionsTickets(ticketNum: string) {
  if (!process.env.DATABASE_URL) {
    throw new Error("DATABASE_URL is not defined");
  }
  if (!ticketNum) {
    throw new Error("Date is not defined");
  }
  const sql = neon(process.env.DATABASE_URL);
  const response =
    await sql`UPDATE ticket_count SET ticket_number = ${ticketNum} WHERE id = 1;`;
  return response;
}

export async function getRemainingTickets() {
  if (!process.env.DATABASE_URL) {
    throw new Error("DATABASE_URL is not defined");
  }
  const sql = neon(process.env.DATABASE_URL);
  const data = await sql`SELECT * FROM ticket_count ;`;
  if (parseInt(data[0].ticket_number) < 0) {
    return data;
  }
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
  return data;
}

export async function insertWaitlist(waitlistInfo: any) {
  console.log(waitlistInfo);
  if (!process.env.DATABASE_URL) {
    throw new Error("DATABASE_URL is not defined");
  }
  const sql = neon(process.env.DATABASE_URL);
  const data =
    await sql`INSERT INTO waitlist(name, email, postcode, child_dob, child_name)
VALUES (${waitlistInfo.parentName}, ${waitlistInfo.email}, ${waitlistInfo.postalCode}, ${waitlistInfo.childDOB} , ${waitlistInfo.childName})
RETURNING *;`;
  console.log(data);
  return data;
}
//"Stage 1"
