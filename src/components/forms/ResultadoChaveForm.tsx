import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Input } from "../ui/input";
import { Form, FormControl, FormField, FormItem, FormMessage } from "../ui/form";
import { Button } from "../ui/button";

const formSchema = yup.object({
  resultado_chave: yup.string().required("O nome do resultado-chave é obrigatório"),
});

type FormValues = yup.InferType<typeof formSchema>;

export const NovoObjetivoForm = () => {
  const form = useForm<FormValues>({
    resolver: yupResolver(formSchema),
    defaultValues: {
      resultado_chave: "",
    },
  });

  function onSubmit(data: FormValues) {
    console.log(data);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="resultado_chave"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  placeholder="Digite o Resultado-Chave"
                  {...field}
                  className={form.formState.errors.resultado_chave ? "border-red-500" : ""}
                />
              </FormControl>
              <FormMessage>{form.formState.errors.resultado_chave?.message}</FormMessage>
            </FormItem>
          )}
        />
        <Button className="w-full bg-cyan-600 text-white">Salvar</Button>
      </form>
    </Form>
  );
};
