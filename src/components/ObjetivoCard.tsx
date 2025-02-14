import { ProgressBar } from "./ProgressBar";
import { Divider } from "./Divider";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { OKR } from "@/lib/definitions";
import ResultadoSection from "./ResultadoSection";
import { calculateObjetivoProgress } from "@/lib/utils";

export interface ObjetivoCardProps {
  okr: OKR;
}

export const ObjetivoCard = ({ okr }: ObjetivoCardProps) => {
  return (
    <div className="flex flex-col w-full max-w-xl gap-2">
      <div className="bg-white border border-1 border-gray-100 shadow-sm rounded-lg ">
        <div className="p-6">
          <h2 className="text-lg font-semibold mb-2">{okr.name}</h2>
          <ProgressBar progress={calculateObjetivoProgress(okr)} />
        </div>
        <Divider> Resultados-Chave </Divider>
        <div className="p-6">
          {okr.resultKeys.map((resultKey, index) => (
            <div key={resultKey.id}>
              <ResultadoSection {...resultKey} />
              {index < okr.resultKeys.length - 1 && <Divider className="my-4" />}
            </div>
          ))}
        </div>
      </div>
      <Dialog>
        <DialogTrigger className="self-end text-cyan-600 font-medium pe-2">+ Adicionar Resultados-Chave</DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Criar Novo Objetivo</DialogTitle>
            <DialogDescription></DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};
