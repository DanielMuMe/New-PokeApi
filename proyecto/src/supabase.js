import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://rgjelchmyxlojosksfrh.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJnamVsY2hteXhsb2pvc2tzZnJoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDczMzc3NjYsImV4cCI6MjA2MjkxMzc2Nn0.Xo0E82QM6-MTIylpOE8zrazP938qfP4xnIvD5B5gGYE';
export const supabase = createClient(supabaseUrl, supabaseKey);