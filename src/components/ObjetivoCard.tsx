"use client";

import { Divider } from "./ui/divider";
import { Objetivo, Results } from "@/lib/definitions";
import OpenDialog from "./OpenDialog";
import { ProgressBar } from "./ProgressBar";
import { ResultadoChaveForm } from "./forms/ResultadoChaveForm";
import ResultadoSection from "./ResultadoSection";
import { calculateObjetivoProgress } from "@/lib/utils";
import { useEffect, useState } from "react";
import { getResultsKeysByOKRId } from "@/lib/api";
import { Skeleton } from "./ui/skeleton";

export interface ObjetivoCardProps {
  okr: Objetivo;
}

export const ObjetivoCard = ({ okr }: ObjetivoCardProps) => {
  const { name } = okr;
  const [resultKeys, setResultKeys] = useState<Results[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    getResultsKeysByOKRId(okr.id)
      .then((data) => {
        setResultKeys(data);
      })
      .catch(() => {
        setResultKeys([]);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [okr]);

  return (
    <div className="flex flex-col w-full gap-2">
      <div className="bg-white border border-1 border-gray-100 shadow-sm rounded-lg ">
        <div className="p-6">
          <h2 className="text-lg font-semibold mb-2">{name}</h2>
          <ProgressBar progress={calculateObjetivoProgress(okr)} />
        </div>
        <Divider> Resultados-Chave </Divider>
        <div className="p-6">
          {isLoading
            ? [...Array(2)].map((_, index) => (
                <div key={index}>
                  <div className="space-y-2 mb-4">
                    <Skeleton className="h-4 w-[250px]" />
                    <Skeleton className="h-3 w-[200px]" />
                  </div>
                  {index < 1 && <Divider className="my-4" />}
                </div>
              ))
            : resultKeys.map((resultKey, index) => (
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
