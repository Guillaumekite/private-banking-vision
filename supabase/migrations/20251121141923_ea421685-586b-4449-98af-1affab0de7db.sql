-- Modify appointments table to allow anonymous bookings
ALTER TABLE public.appointments 
  ALTER COLUMN user_id DROP NOT NULL;

-- Add guest information fields
ALTER TABLE public.appointments 
  ADD COLUMN guest_name TEXT,
  ADD COLUMN guest_email TEXT;

-- Drop existing RLS policies
DROP POLICY IF EXISTS "Users can view their own appointments" ON public.appointments;
DROP POLICY IF EXISTS "Users can create their own appointments" ON public.appointments;
DROP POLICY IF EXISTS "Users can update their own appointments" ON public.appointments;
DROP POLICY IF EXISTS "Users can delete their own appointments" ON public.appointments;

-- Create new RLS policies that allow anonymous bookings
CREATE POLICY "Users can view their own appointments" 
ON public.appointments 
FOR SELECT 
USING (
  auth.uid() = user_id OR user_id IS NULL
);

CREATE POLICY "Anyone can create appointments" 
ON public.appointments 
FOR INSERT 
WITH CHECK (true);

CREATE POLICY "Users can update their own appointments" 
ON public.appointments 
FOR UPDATE 
USING (auth.uid() = user_id OR user_id IS NULL);

CREATE POLICY "Users can delete their own appointments" 
ON public.appointments 
FOR DELETE 
USING (auth.uid() = user_id OR user_id IS NULL);