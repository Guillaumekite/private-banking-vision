-- Make guest fields not required
ALTER TABLE public.appointments 
  ALTER COLUMN guest_name DROP NOT NULL,
  ALTER COLUMN guest_email DROP NOT NULL;