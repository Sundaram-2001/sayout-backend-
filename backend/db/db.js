import dotenv from 'dotenv';
dotenv.config();

import { createClient } from '@supabase/supabase-js';

const supabase_url = process.env.SUPABASE_URL;
const supabase_key = process.env.SUPABASE_KEY;

if (!supabase_url || !supabase_key) {
  throw new Error("Missing SUPABASE_URL or SUPABASE_KEY environment variables");
}

const supabase = createClient(supabase_url, supabase_key);

export async function addData(message) {
  try {
    const { data, error } = await supabase
      .from('messages')
      .insert([{ message }]);
    console.log("Supabase getMessages data:", data);
    console.log("Supabase getMessages error:", error);
    if (error) {
      console.error("Supabase insert error:", error);
      return { success: false, error };
    }

    return { success: true, data };
  } catch (err) {
    console.error("Unexpected DB error:", err);
    return { success: false, error: err };
  }
}

export async function getMessages() {
  try {
    const { data, error } = await supabase.from('messages').select('message');
    if (error) {
      console.error("Supabase Error:", error);
      return { success: false, error };
    }
    console.log("Fetched messages:", data);
    return { success: true, data };
  } catch (error) {
    console.error("Unexpected DB error:", error);
    return { success: false, error };
  }
}
