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
    await sql`INSERT INTO Referral_Information(name, email, second_email, signposted, child_name, child_DOB, parent_names, siblings, address, phone, school_name, school_year, diagnosis, diagnosis_date, medication, professionals, eligibility, interests, interests_blob, communicate_with_others, follow_instructions, visual_support, social_communication, highly_anxious, recognise_emotions, attend_school, self_harm, areas_of_difficulty, daily_skills, additional_support, consent)
VALUES (${userInfo.name}, ${userInfo.email}, ${userInfo.secondEmail}, ${userInfo.signposted}, ${userInfo.childName}, ${userInfo.childDOB}, ${userInfo.parentNames}, ${userInfo.siblings}, ${userInfo.address}, ${userInfo.phone}, ${userInfo.schoolName}, ${userInfo.schoolYear}, ${userInfo.diagnosis}, ${userInfo.diagnosisDate}, ${userInfo.medication}, ${userInfo.professionals}, ${userInfo.eligibility}, ${userInfo.interests}, ${userInfo.interestsblob}, ${userInfo.communicateWithOthers}, ${userInfo.followInstructions}, ${userInfo.visualSupport}, ${userInfo.socialCommunication}, ${userInfo.highlyAnxious}, ${userInfo.recogniseEmotions}, ${userInfo.attendSchool}, ${userInfo.selfHarm}, ${userInfo.areasOfDifficulty}, ${userInfo.dailySkills}, ${userInfo.additionalSupport}, ${userInfo.consent})
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
