"use client";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Input } from "../ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Button } from "../ui/button";
import { createOKR } from "@/lib/api";
import { useRouter } from "next/navigation";

const formSchema = yup.object({
  objetivo: yup.string().required("O objetivo é obrigatório").max(100, "O objetivo não pode exceder 100 caracteres"),
});

type FormValues = yup.InferType<typeof formSchema>;

export const NovoObjetivoForm = () => {
  const router = useRouter();
  const form = useForm<FormValues>({
    resolver: yupResolver(formSchema),
    defaultValues: {
      objetivo: "",
    },
  });

  function onSubmit(data: FormValues) {
    const req = {
      name: data.objetivo,
    };
    createOKR(req)
      .then(() => {
        router.refresh();
        form.reset();
      })
      .catch(() => {})
      .finally(() => {});
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="objetivo"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Objetivo</FormLabel>
              <FormControl>
                <Input
                  placeholder="Digite o objetivo"
                  {...field}
                  className={form.formState.errors.objetivo ? "border-red-500" : ""}
                />
              </FormControl>
              <FormMessage>{form.formState.errors.objetivo?.message}</FormMessage>
            </FormItem>
          )}
        />
        <Button className="w-full bg-cyan-600 hover:bg-cyan-800 text-white">Salvar</Button>
      </form>
    </Form>
  );
};
