import { DialogDescription, DialogTitle } from "@radix-ui/react-dialog";
import { Dialog, DialogContent, DialogHeader, DialogTrigger } from "./ui/dialog";

const AdicionarResultado = () => {
  return (
    <Dialog>
      <DialogTrigger className="self-end text-cyan-600 font-medium pe-2">+ Adicionar Resultados-Chave</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Criar Novo Objetivo</DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default AdicionarResultado;
