import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://gbpgwdnfufrryajtqysu.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdicGd3ZG5mdWZycnlhanRxeXN1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDU1NDIwNDMsImV4cCI6MjAyMTExODA0M30.SIJL5T2KvA0cUiMhPSqj8TtPGQP_oD9ush2Fbp0LQB0"
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase

