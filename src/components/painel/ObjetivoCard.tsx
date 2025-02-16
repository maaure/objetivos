"use client";
import { Divider } from "../ui/divider";
import { Objetivo, Results } from "@/lib/definitions";
import { ProgressBar } from "../ui/progress-bar";
import { ResultadoChaveFormDialog } from "../forms/ResultadoChaveFormDialog";
import ResultadoSection from "./ResultadoSection";
import { calculateObjetivoProgress } from "@/lib/utils";
import { useEffect, useState } from "react";
import { getResultsKeysByOKRId } from "@/lib/api";
import SkeletonCard from "../ui/skeleton-card";

export interface ObjetivoCardProps {
  okr: Objetivo;
}

export const ObjetivoCard = ({ okr }: ObjetivoCardProps) => {
  const { name } = okr;
  const [resultKeys, setResultKeys] = useState<Results[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [reloadTrigger, setReloadTrigger] = useState(0);

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
  }, [okr, reloadTrigger]);

  return (
    <div className="flex flex-col w-full gap-2">
      <div className="bg-white border border-1 border-gray-100 shadow-sm rounded-lg ">
        <div className="p-6">
          <h2 className="text-lg font-semibold mb-2">{name}</h2>
          <ProgressBar progress={calculateObjetivoProgress(resultKeys)} />
        </div>
        <Divider> Resultados-Chave </Divider>
        <div className="p-6">
          {isLoading ? (
            <SkeletonCard />
          ) : (
            resultKeys.map((resultKey, index) => (
              <div key={resultKey.id}>
                <ResultadoSection resultado={resultKey} onEdit={() => setReloadTrigger((prev) => prev + 1)} />
                {index < resultKeys.length - 1 && <Divider className="my-4" />}
              </div>
            ))
          )}
        </div>
      </div>
      <ResultadoChaveFormDialog
        okrId={okr.id}
        onSuccess={() => setReloadTrigger((prev) => prev + 1)}
        label="+ Adicionar Novo Resultado-Chave"
        className="self-end text-cyan-800"
      />
    </div>
  );
};
