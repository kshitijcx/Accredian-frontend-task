"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const formSchema = z.object({
  referrerName: z.string().min(1),
  referrerMail: z.string().email(),
  refereeName: z.string().min(1),
  refereeMail: z.string().email(),
  course: z.enum([
    "Full-Stack Web Development Certification",
    "Machine Learning Specialist",
    "Cybersecurity Professional Certification",
  ]),
});

export function ReferForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      referrerName: "",
      referrerMail: "",
      refereeName: "",
      refereeMail: "",
      course: undefined,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <AlertDialog>
      <AlertDialogTrigger className="bg-[#1A73E8] text-primary-foreground shadow hover:bg-primary/90 rounded-xl py-2 font-bold">
        Refer Now
      </AlertDialogTrigger>
      <AlertDialogContent className="max-h-[600px] overflow-y-scroll">
        <AlertDialogHeader>
          <AlertDialogTitle>Enter Information</AlertDialogTitle>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="referrerName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Referrer Name</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="referrerMail"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Referrer Email</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="refereeName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Referee Name</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="refereeMail"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Referee Email</FormLabel>
                    <FormControl>
                      <Input placeholder="" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="course"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Course</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Choose a course to refer" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="Full-Stack Web Development Certification">
                          Full-Stack Web Development Certification
                        </SelectItem>
                        <SelectItem value="Machine Learning Specialist">
                          Machine Learning Specialist
                        </SelectItem>
                        <SelectItem value="Cybersecurity Professional Certification">
                          Cybersecurity Professional Certification
                        </SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit">Submit</Button>
            </form>
          </Form>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
