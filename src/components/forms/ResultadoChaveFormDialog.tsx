"use client";

import * as yup from "yup";

import { Form, FormControl, FormField, FormItem, FormMessage } from "../ui/form";
import { Plus, Trash } from "lucide-react";
import { createResultsKey, updateResultsKey } from "@/lib/api";

import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Results } from "@/lib/definitions";
import { useFieldArray } from "react-hook-form";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog";
import { Icon } from "lucide-react";
import { useState } from "react";

const formSchema = yup.object({
  name: yup.string().required("O nome do resultado-chave é obrigatório"),
  deliveries: yup
    .array()
    .of(
      yup.object().shape({
        name: yup.string().required(),
        value: yup
          .number()
          .required()
          .moreThan(0, "O valor deve ser maior que zero")
          .typeError("O valor deve ser um número"),
      })
    )
    .required(),
});

type FormValues = yup.InferType<typeof formSchema>;

interface ResultadoChaveFormProps {
  okrId?: number;
  result?: Results;
  onSuccess?: () => void;
  icon?: React.ReactElement<typeof Icon>;
  label?: string;
  className: string;
}

export const ResultadoChaveFormDialog = ({
  okrId: id,
  result,
  onSuccess,
  icon,
  label,
  className,
}: ResultadoChaveFormProps) => {
  const [open, setOpen] = useState(false);
  const form = useForm<FormValues>({
    resolver: yupResolver(formSchema),
    defaultValues: {
      name: result?.name ?? "",
      deliveries: result?.deliveries ?? [
        {
          name: "",
          value: 0,
        },
      ],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "deliveries",
  });

  function onSubmit(data: FormValues) {
    let promise;

    if (result?.id) {
      promise = updateResultsKey(result, data);
    } else if (id) {
      promise = createResultsKey(id, data);
    } else {
      promise = Promise.resolve();
    }

    return promise
      .then(() => {
        form.reset();
        onSuccess?.();
        setOpen(false);
      })
      .catch((error) => {
        console.error("Erro ao salvar resultado-chave:", error);
      });
  }
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger className={`flex gap-2 ${className}`}>
        {icon}
        {label}
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold">{`${
            id ? "Criar Novo" : "Editar"
          } Resultado-Chave`}</DialogTitle>
          <DialogDescription className="hidden">
            Preencha os campos abaixo para criar ou alterar um Resultado-Chave
          </DialogDescription>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 pt-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder="Digite o Resultado-Chave"
                        {...field}
                        className={form.formState.errors.name ? "border-red-500" : ""}
                      />
                    </FormControl>
                    <FormMessage>{form.formState.errors.name?.message}</FormMessage>
                  </FormItem>
                )}
              />

              <div className="space-y-4">
                {fields.map((field, index) => (
                  <div key={field.id} className="flex gap-4 items-end">
                    <div className="flex-1 grid grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name={`deliveries.${index}.name`}
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <Input
                                placeholder="Digite a entrega"
                                {...field}
                                className={form.formState.errors.deliveries?.[index]?.name ? "border-red-500" : ""}
                              />
                            </FormControl>
                            <FormMessage>{form.formState.errors.deliveries?.[index]?.name?.message}</FormMessage>
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name={`deliveries.${index}.value`}
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <Input
                                placeholder="Valor (%)"
                                type="number"
                                {...field}
                                className={form.formState.errors.deliveries?.[index]?.name ? "border-red-500" : ""}
                              />
                            </FormControl>
                            <FormMessage>{form.formState.errors.deliveries?.[index]?.value?.message}</FormMessage>
                          </FormItem>
                        )}
                      />
                    </div>
                    <Button type="button" variant="link" onClick={() => remove(index)}>
                      <Trash className="text-red-600" />
                    </Button>
                  </div>
                ))}

                <div className="flex flex-row-reverse">
                  <Button
                    type="button"
                    variant="ghost"
                    onClick={() => append({ name: "", value: 0 })}
                    className="place-items-end self-end"
                  >
                    <Plus /> Adicionar Entrega
                  </Button>
                </div>
              </div>

              <Button className="w-full bg-cyan-600 text-white">Salvar</Button>
            </form>
          </Form>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
