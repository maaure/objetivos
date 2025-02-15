import { Divider } from "./ui/divider";
import { Objetivo } from "@/lib/definitions";
import OpenDialog from "./OpenDialog";
import { ProgressBar } from "./ProgressBar";
import { ResultadoChaveForm } from "./forms/ResultadoChaveForm";
import ResultadoSection from "./ResultadoSection";
import { calculateObjetivoProgress } from "@/lib/utils";

export interface ObjetivoCardProps {
  okr: Objetivo;
}

export const ObjetivoCard = ({ okr }: ObjetivoCardProps) => {
  const { name, resultKeys } = okr;

  return (
    <div className="flex flex-col w-full gap-2">
      <div className="bg-white border border-1 border-gray-100 shadow-sm rounded-lg ">
        <div className="p-6">
          <h2 className="text-lg font-semibold mb-2">{name}</h2>
          <ProgressBar progress={calculateObjetivoProgress(okr)} />
        </div>
        <Divider> Resultados-Chave </Divider>
        <div className="p-6">
          {resultKeys?.map((resultKey, index) => (
            <div key={resultKey.id}>
              <ResultadoSection resultado={resultKey} />
              {index < resultKeys.length - 1 && <Divider className="my-4" />}
            </div>
          ))}
        </div>
      </div>
      <OpenDialog
        title="Criar Novo Resultado-Chave"
        description="Preencha os campos abaixo para criar um novo resultado-chave"
        label="+ Adicionar Resultado-Chave"
        className="self-end text-cyan-700"
      >
        <ResultadoChaveForm okrId={okr.id} />
      </OpenDialog>
    </div>
  );
};
