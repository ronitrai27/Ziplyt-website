"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  //   CardDescription,
  //   CardHeader,
  //   CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Send } from "lucide-react";

const techRoles = [
  "Software Engineer",
  "Frontend Developer",
  "Backend Developer",
  "Full Stack Developer",
  "DevOps Engineer",
  "Data Scientist",
  "UX/UI Designer",
  "Product Manager",
  "QA Engineer",
  "Machine Learning Engineer",
  "Mobile Developer",
  "Cloud Architect",
  "Blockchain Developer",
  "Security Engineer",
  "Technical Writer",
];

const countries = [
  "United States",
  "Canada",
  "United Kingdom",
  "Germany",
  "France",
  "Australia",
  "Japan",
  "India",
  "Brazil",
  "Singapore",
  "Netherlands",
  "Sweden",
  "Spain",
  "Italy",
  "Other",
];

export function ApplicationForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    setIsSubmitting(false);
    e.currentTarget.reset();
  };

  return (
    <div className="sticky top-8">
      <Card className="shadow-xl border-0 bg-light/15 backdrop-blur-sm animate-slide-in-right">
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <FormField
                id="name"
                label="Full Name"
                placeholder="Robin Rox"
                type="text"
                focusedField={focusedField}
                setFocusedField={setFocusedField}
                delay="0ms"
              />

              <FormField
                id="email"
                label="Email"
                placeholder="Rox@example.com"
                type="email"
                focusedField={focusedField}
                setFocusedField={setFocusedField}
                delay="100ms"
              />

              <FormField
                id="phone"
                label="Phone Number"
                placeholder="+91 000000000"
                type="tel"
                focusedField={focusedField}
                setFocusedField={setFocusedField}
                delay="200ms"
              />
            </div>

            <div className="space-y-4">
              <div
                className="space-y-2 animate-fade-in-up"
                style={{ animationDelay: "300ms" }}
              >
                <Label htmlFor="country">Country of Residence</Label>
                <Select required>
                  <SelectTrigger
                    id="country"
                    className="transition-all duration-300 hover:border-primary focus:scale-[1.02]"
                  >
                    <SelectValue placeholder="Select country" />
                  </SelectTrigger>
                  <SelectContent>
                    {countries.map((country) => (
                      <SelectItem
                        key={country}
                        value={country.toLowerCase().replace(/\s+/g, "-")}
                      >
                        {country}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div
                className="space-y-2 animate-fade-in-up"
                style={{ animationDelay: "400ms" }}
              >
                <Label htmlFor="role">Desired Role</Label>
                <Select required>
                  <SelectTrigger
                    id="role"
                    className="transition-all duration-300 hover:border-primary focus:scale-[1.02]"
                  >
                    <SelectValue placeholder="Select role" />
                  </SelectTrigger>
                  <SelectContent>
                    {techRoles.map((role) => (
                      <SelectItem
                        key={role}
                        value={role.toLowerCase().replace(/\s+/g, "-")}
                      >
                        {role}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div
              className="space-y-2 animate-fade-in-up"
              style={{ animationDelay: "500ms" }}
            >
              <Label htmlFor="message">Why do you want to join our team?</Label>
              <textarea
                id="message"
                className="h-32 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-300 hover:border-primary focus:scale-[1.02]"
                placeholder="Tell us about yourself and why you're interested in joining our team..."
                required
                onFocus={() => setFocusedField("message")}
                onBlur={() => setFocusedField(null)}
              />
            </div>

            <Button
              type="submit"
              className="w-full group transition-all duration-300 hover:scale-[1.02] animate-fade-in-up bg-primary-blue font-inter"
              disabled={isSubmitting}
              style={{ animationDelay: "600ms" }}
            >
              {isSubmitting ? (
                <div className="flex items-center gap-2">
                  <div className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                  Submitting...
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  Submit Application
                  <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              )}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

function FormField({
  id,
  label,
  placeholder,
  type,
  focusedField,
  setFocusedField,
  delay,
}: {
  id: string;
  label: string;
  placeholder: string;
  type: string;
  focusedField: string | null;
  setFocusedField: (field: string | null) => void;
  delay: string;
}) {
  return (
    <div
      className="space-y-2 animate-fade-in-up"
      style={{ animationDelay: delay }}
    >
      <Label
        htmlFor={id}
        className={`transition-colors duration-300 ${
          focusedField === id ? "text-primary" : ""
        }`}
      >
        {label}
      </Label>
      <Input
        id={id}
        type={type}
        placeholder={placeholder}
        required
        className="transition-all duration-300 hover:border-primary focus:scale-[1.02] bg-white"
        onFocus={() => setFocusedField(id)}
        onBlur={() => setFocusedField(null)}
      />
    </div>
  );
}
