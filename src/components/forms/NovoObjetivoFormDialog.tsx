"use client";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Input } from "../ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Button } from "../ui/button";
import { createOKR } from "@/lib/api";
import { useRouter } from "next/navigation";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog";
import { Plus } from "lucide-react";
import { useState } from "react";

const formSchema = yup.object({
  objetivo: yup.string().required("O objetivo é obrigatório").max(100, "O objetivo não pode exceder 100 caracteres"),
});

type FormValues = yup.InferType<typeof formSchema>;

export const NovoObjetivoFormDialog = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
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
        setIsOpen(false);
      })
      .catch(() => {})
      .finally(() => {});
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger
        className={`flex items-center gap-2 text-white px-4 py-2 rounded-md transition-color bg-cyan-600 hover:bg-cyan-700 duration-150`}
      >
        <Plus />
        Criar Objetivo
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold">Criar Novo Objetivo</DialogTitle>
          <DialogDescription className="hidden">
            Preencha os campos abaixo para criar um novo objetivo.
          </DialogDescription>
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
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
