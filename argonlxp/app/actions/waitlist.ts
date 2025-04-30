"use server";

import { db } from "@/db";
import { waitlist, NewWaitlistEntry } from "@/db/schema";
import { revalidatePath } from "next/cache";
import { sendEmail, generateWaitlistConfirmationEmail } from "@/lib/email";

/**
 * Server action to add a new entry to the waitlist
 */
export async function addToWaitlist(data: NewWaitlistEntry) {
  try {
    // Insert the new waitlist entry
    const result = await db.insert(waitlist).values(data).returning();
    
    // Send confirmation email
    try {
      const { name, email } = data;
      if (email) {
        const emailContent = generateWaitlistConfirmationEmail(name || "there");
        await sendEmail({
          to: email,
          ...emailContent
        });
      }
    } catch (emailError) {
      console.error("Error sending confirmation email:", emailError);
      // Continue execution even if email fails
    }
    
    // Revalidate the paths that might display waitlist data
    revalidatePath("/waitlist");
    
    return { success: true, data: result[0] };
  } catch (error: any) {
    console.error("Error adding to waitlist:", error);
    
    // Check for unique constraint violation (duplicate email)
    if (error.code === "23505") {
      return { 
        success: false, 
        error: "This email is already on our waitlist. Thank you for your interest!" 
      };
    }
    
    return { 
      success: false, 
      error: "Failed to add to waitlist. Please try again later." 
    };
  }
}
