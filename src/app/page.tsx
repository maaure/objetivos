import { ObjetivoCard } from "@/components/ObjetivoCard";

const mockedData = {
  createdAt: new Date("2025-02-07T22:09:03.167Z"),
  name: "Reduzir tempo médio de resposta ao cliente",
  id: 1,
  resultKeys: [
    {
      createdAt: new Date("2025-02-07T14:04:16.275Z"),
      name: "Implementar chatbot para suporte básico",
      deliveries: [
        {
          name: "Efetuar comparativo custo/benefício dos melhores chatbots do mercado",
          value: 20,
        },
        {
          name: "Acompanhar decisão e contratação do chatbot para início da implementação",
          value: 5,
        },
        {
          name: "Estudar documentação de API para integração do chatbot",
          value: 25,
        },
        {
          name: "Implementar rotinas de suporte ao cliente integradas ao produto",
          value: 40,
        },
        {
          name: "Acompanhar e validar uso do chatbot com clientes na primeira semana",
          value: 10,
        },
      ],
      id: 1,
      okrId: 1,
    },
    {
      createdAt: new Date("2025-02-07T17:10:55.495Z"),
      name: "Criar central de ajuda com FAQs detalhadas",
      deliveries: [
        {
          name: "Identificar as principais dúvidas e problemas dos clientes",
          value: 20,
        },
        {
          name: "Elaborar conteúdo inicial para as FAQs",
          value: 30,
        },
        {
          name: "Desenvolver e publicar a central de ajuda no site",
          value: 40,
        },
        {
          name: "Monitorar acessos e feedback dos clientes",
          value: 10,
        },
      ],
      id: 2,
      okrId: 1,
    },
    {
      createdAt: new Date("2025-02-06T23:05:12.466Z"),
      name: "Ampliar equipe de atendimento em horário de pico",
      deliveries: [
        {
          name: "Analisar volume de atendimento nos horários de pico",
          value: 25,
        },
        {
          name: "Definir quantidade de profissionais adicionais necessários",
          value: 25,
        },
        {
          name: "Realizar processo seletivo e contratação",
          value: 30,
        },
        {
          name: "Treinar novos colaboradores para atendimento",
          value: 20,
        },
      ],
      id: 3,
      okrId: 1,
    },
  ],
};

export default function Home() {
  return (
    <>
      <ObjetivoCard okr={mockedData} />
    </>
  );
}
