import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://ghrzmnrtlyqsilonsbcf.supabase.co'
const supabaseAnonKey = 'sb_publishable_eurGYSwOArenSdYGBKyimQ_O4KxK2Ps'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)