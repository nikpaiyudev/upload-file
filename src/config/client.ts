import { createClient } from "@supabase/supabase-js";

const projectUrl = import.meta.env.VITE_SUPABASE_URL;
const publishableKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

const supabase = createClient(projectUrl, publishableKey);
export default supabase;