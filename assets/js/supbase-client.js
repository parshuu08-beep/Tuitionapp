import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm';

const supabaseUrl = 'https://tkbvjgpenwsslasfdexr.supabase.co';
const supabaseAnonKey = 'sb_publishable_pNv5z9WFjMn6xwFi6TJRXQ_xzPXVhbt';

// Creates and exports the single Supabase client instance for the app
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

console.log('Supabase connected:', !!supabase);