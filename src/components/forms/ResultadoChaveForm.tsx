"use client";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Input } from "../ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "../ui/form";
import { Button } from "../ui/button";
import { useFieldArray } from "react-hook-form";
import { Plus, Trash } from "lucide-react";
import { Results } from "@/lib/definitions";

const formSchema = yup.object({
  resultado_chave: yup
    .string()
    .required("O nome do resultado-chave é obrigatório"),
  entregas: yup
    .array()
    .of(
      yup.object().shape({
        name: yup.string(),
        value: yup
          .number()
          .moreThan(0, "O valor deve ser maior que zero")
          .typeError("O valor deve ser um número"),
      })
    )
    .required(),
});

type FormValues = yup.InferType<typeof formSchema>;

interface ResultadoChaveFormProps {
  data?: Results;
}

export const ResultadoChaveForm = ({ data }: ResultadoChaveFormProps) => {
  const form = useForm<FormValues>({
    resolver: yupResolver(formSchema),
    defaultValues: {
      resultado_chave: data?.name,
      entregas: data?.deliveries ?? [
        {
          name: undefined,
          value: undefined,
        },
      ],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "entregas",
  });

  function onSubmit(data: FormValues) {
    console.log(data);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 pt-4">
        <FormField
          control={form.control}
          name="resultado_chave"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  placeholder="Digite o Resultado-Chave"
                  {...field}
                  className={
                    form.formState.errors.resultado_chave
                      ? "border-red-500"
                      : ""
                  }
                />
              </FormControl>
              <FormMessage>
                {form.formState.errors.resultado_chave?.message}
              </FormMessage>
            </FormItem>
          )}
        />

        <div className="space-y-4">
          {fields.map((field, index) => (
            <div key={field.id} className="flex gap-4 items-end">
              <div className="flex-1 grid grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name={`entregas.${index}.name`}
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          placeholder="Digite a entrega"
                          {...field}
                          className={
                            form.formState.errors.entregas?.[index]?.name
                              ? "border-red-500"
                              : ""
                          }
                        />
                      </FormControl>
                      <FormMessage>
                        {form.formState.errors.entregas?.[index]?.name?.message}
                      </FormMessage>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name={`entregas.${index}.value`}
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          placeholder="Valor (%)"
                          type="number"
                          {...field}
                          className={
                            form.formState.errors.entregas?.[index]?.name
                              ? "border-red-500"
                              : ""
                          }
                        />
                      </FormControl>
                      <FormMessage>
                        {
                          form.formState.errors.entregas?.[index]?.value
                            ?.message
                        }
                      </FormMessage>
                    </FormItem>
                  )}
                />
              </div>
              <Button
                type="button"
                variant="link"
                onClick={() => remove(index)}
              >
                <Trash className="text-red-600" />
              </Button>
            </div>
          ))}

          <div className="flex flex-row-reverse">
            <Button
              type="button"
              variant="ghost"
              onClick={() => append({})}
              className="place-items-end self-end"
            >
              <Plus /> Adicionar Entrega
            </Button>
          </div>
        </div>

        <Button className="w-full bg-cyan-600 text-white">Salvar</Button>
      </form>
    </Form>
  );
};
