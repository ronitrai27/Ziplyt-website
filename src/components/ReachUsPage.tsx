"use client";

import type React from "react";

import { useState, useTransition } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Loader } from "lucide-react";
// import Link from "next/link";
import Image from "next/image";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel } from "./ui/form";
import { contactUs } from "@/app/actions";
import { toast } from "sonner";

const formSchema = z.object({
  fullName: z.string().min(1, "Full name is required"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(1, "Message is required"),
});

type FormValues = z.infer<typeof formSchema>;

export default function ReachUsPage() {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  });
  const [isSuccess, setIsSuccess] = useState(false);
  const [isPending, startTransition] = useTransition();

  const onSubmit = (values: FormValues) => {
    startTransition(async () => {
      const res = await contactUs(values);

      if (res.success) {
        form.reset();
        setIsSuccess(true);
      } else {
        toast.error("Failed to send message");
      }
    });
  };

  return (
    <section className="w-full bg-white">
      {/* Header with blue overlay image */}
      <div className="relative h-64 md:h-80 w-full overflow-hidden">
        <Image
          src="/reachus.jpg"
          alt="Professional workers"
          width={1920}
          height={800}
          className="object-cover w-full h-full"
          priority
        />
        <div className="absolute inset-0 ziplyt-gradient opacity-60"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 font-poppins">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get in Touch
          </h1>
          <p className="text-blue-100 max-w-2xl text-lg tracking-tighter font-inter">
            We&apos;re here to help you find the perfect workers for your
            business needs
          </p>
        </div>
      </div>

      {/* Main content */}
      <div className="ziplyt-container ziplyt-section">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Left column - Contact info */}
          <div className="lg:col-span-2 space-y-10">
            <div>
              <h2 className="text-sm text-blue-600 font-medium uppercase tracking-tight font-inter mb-3">
                Contact Us
              </h2>
              <h3 className="ziplyt-heading mb-4 font-inter tracking-tighter">
                Let&apos;s start a conversation
              </h3>
              <p className="text-gray-600 font-roboto tracking-tight text-[18px]  leading-snug">
                We’d be delighted to hear from you! Whether you&apos;re
                interested in working with us or simply want to share your
                thoughts, please fill out the form below — we truly value your
                input.
              </p>
            </div>

            {/* <div className="space-y-8">
              <div className="flex items-start gap-5">
                <div className="bg-gray-200 p-3 rounded-full">
                  <Phone className="h-5 w-5 text-primary-blue" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-gray-900">
                    Call Us
                  </h4>
                  <p className="text-gray-600 mt-1">+91 6280620947</p>
                  <p className="text-gray-600">Mon-Fri, 9am-6pm EST</p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="bg-gray-200 p-3 rounded-full">
                  <MapPin className="h-5 w-5 text-primary-blue" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-gray-900">
                    Visit Us
                  </h4>
                  <p className="text-gray-600 mt-1">ludhiana, dugri phase1</p>
                  <p className="text-gray-600">Punjab , India</p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="bg-gray-200 p-3 rounded-full">
                  <Mail className="h-5 w-5 text-primary-blue" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-gray-900">
                    Email Us
                  </h4>
                  <p className="text-gray-600 mt-1">ziplyt.ind@gmail.com</p>
                  <p className="text-gray-600">
                    We&apos;ll respond within 24 hours
                  </p>
                </div>
              </div>
            </div> */}
          </div>

          {/* Right column - Contact form */}
          <div className="lg:col-span-3">
            <div className="bg-light/15 p-8 md:p-10 rounded-2xl shadow-sm border border-gray-200">
              {isSuccess ? (
                <div className="text-center py-10">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-6">
                    <svg
                      className="w-8 h-8 text-green-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-gray-600 font-inter font-medium mb-6">
                    Thank you for reaching out. We&apos;ll get back to you
                    shortly.
                  </p>
                  <Button
                    onClick={() => setIsSuccess(false)}
                    className="bg-blue-600 hover:bg-blue-700"
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <>
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold text-deep font-inter tracking-tight mb-2">
                      Send Us a Message
                    </h3>
                  </div>

                  <Form {...form}>
                    <form
                      onSubmit={form.handleSubmit(onSubmit)}
                      className="space-y-6"
                    >
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="fullName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Full Name</FormLabel>
                              <FormControl>
                                <Input
                                  id="fullName"
                                  type="text"
                                  {...field}
                                  required
                                  className="ziplyt-input bg-white"
                                />
                              </FormControl>
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Email</FormLabel>
                              <FormControl>
                                <Input
                                  id="email"
                                  type="email"
                                  {...field}
                                  required
                                  className="ziplyt-input bg-white"
                                />
                              </FormControl>
                            </FormItem>
                          )}
                        />
                      </div>

                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>message</FormLabel>
                            <FormControl>
                              <Textarea
                                id="message"
                                required
                                {...field}
                                className="ziplyt-input min-h-[150px] bg-white"
                              />
                            </FormControl>
                          </FormItem>
                        )}
                      />

                      <Button
                        type="submit"
                        className="ziplyt-button w-full"
                        disabled={isPending}
                      >
                        {isPending ? <Loader className="animate-spin" /> : null}
                        Send Message
                      </Button>
                    </form>
                  </Form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
