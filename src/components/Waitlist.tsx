'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect, useRef, useState, useTransition } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from './ui/button';
import { Form, FormControl, FormField, FormItem } from './ui/form';

import { joinWaitingList } from '@/app/actions';
import { Loader } from 'lucide-react';
import { toast } from 'sonner';
import { z } from 'zod';

const formSchema = z.object({
  email: z.string().email('Invalid email address'),
});

type FormValues = z.infer<typeof formSchema>;

export default function WaitlistBar() {
  const [hideBar, setHideBar] = useState(false);
  const footerRef = useRef<HTMLElement | null>(null);
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  });
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    footerRef.current = document.querySelector('footer');

    if (!footerRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setHideBar(entry.isIntersecting);
      },
      {
        root: null,
        threshold: 0.1,
      }
    );

    observer.observe(footerRef.current);

    return () => {
      if (footerRef.current) observer.unobserve(footerRef.current);
    };
  }, []);

  const onSubmit = (values: FormValues) => {
    startTransition(async () => {
      const res = await joinWaitingList(values.email);

      if (res.success) {
        form.reset({ email: '' });
        toast.success('Successfully joined the waiting list!');
      } else {
        toast.error('Failed to join the waiting list');
      }
    });
  };

  return (
    <div
      className={`fixed bottom-8 left-0 right-0 px-4 z-50 flex justify-center transition-opacity duration-300 ${
        hideBar ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <div className='w-full max-w-md bg-white border border-gray-300 rounded-full flex items-center px-4 py-3 shadow-lg'>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className='w-full flex items-center gap-2'
          >
            <FormField
              control={form.control}
              name='email'
              render={({ field }) => (
                <FormItem className='flex-grow'>
                  <FormControl>
                    <input
                      type='email'
                      placeholder='Enter your email'
                      className='w-full outline-none bg-transparent text-sm font-inter placeholder:text-gray-400 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive'
                      disabled={isPending}
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <Button
              type='submit'
              disabled={isPending}
              className='text-white text-sm font-medium bg-primary-blue px-4 py-2 rounded-full hover:bg-blue-600 transition whitespace-nowrap'
            >
              {isPending ? <Loader className='animate-spin' /> : null}
              Join Waitlist
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
}
