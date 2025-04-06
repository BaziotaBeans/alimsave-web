"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FrequentlyAskedQuestions() {
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({
    "item-1": false,
    "item-2": false,
    "item-3": false,
    "item-4": false,
  });

  const handleValueChange = (value: string) => {
    const resetState = {
      "item-1": false,
      "item-2": false,
      "item-3": false,
      "item-4": false,
    };

    if (value) {
      setOpenItems({
        ...resetState,
        [value]: true,
      });
    } else {
      setOpenItems(resetState);
    }
  };

  return (
    <div className="relative bg-blue flex flex-col px-3 sm:px-4">
      <div className="flex flex-col py-12 gap-6 w-full md:w-[80%] mx-auto">
        <h1 className="text-white text-3xl md:text-5xl font-montserrat font-extrabold mb-6 text-center md:text-left">
          Perguntas frequentes
        </h1>

        <Accordion
          type="single"
          collapsible
          className="space-y-4"
          onValueChange={handleValueChange}
        >
          {[
            {
              id: "item-1",
              question: "Em quais províncias o AlimSave está presente?",
              answer:
                "O AlimSave está atualmente presente nas províncias de Lisboa, Porto, Coimbra, Faro e Braga. Estamos em constante expansão para atender mais regiões em breve.",
            },
            {
              id: "item-2",
              question: "O AlimSave cobre promoções de outros estabelecimentos?",
              answer:
                "Sim, o AlimSave cobre promoções de diversos estabelecimentos parceiros, incluindo supermercados, mercearias locais e lojas de produtos alimentícios especializados. Nossa rede de parceiros está sempre crescendo para oferecer mais opções aos nossos usuários.",
            },
            {
              id: "item-3",
              question: "Como funciona o AlimSave?",
              answer:
                "O AlimSave funciona como uma plataforma que conecta consumidores a estabelecimentos que oferecem alimentos com descontos próximos à data de validade. Basta cadastrar-se no aplicativo, buscar ofertas próximas à sua localização e reservar os produtos que deseja adquirir com desconto.",
            },
            {
              id: "item-4",
              question: "Qual é o propósito do AlimSave?",
              answer:
                "O propósito do AlimSave é combater o desperdício de alimentos, oferecendo uma solução que beneficia tanto os consumidores, que podem comprar produtos com desconto, quanto os estabelecimentos, que reduzem suas perdas. Nosso objetivo é criar um sistema alimentar mais sustentável e acessível para todos.",
            },
          ].map((item) => (
            <AccordionItem key={item.id} value={item.id} className="border-0">
              <div className="bg-white rounded-lg">
                <AccordionTrigger
                  className="cursor-pointer p-6 md:p-8 text-blue text-xl md:text-3xl font-medium hover:no-underline grid grid-cols-[1fr_auto] items-center justify-between w-full"
                  hideDefaultIcon
                >
                  <span className="text-left font-extrabold text-base sm:text-xl">
                    {item.question}
                  </span>
                  {openItems[item.id] ? (
                    <Minus className="w-6 h-6 md:w-8 md:h-8" strokeWidth={2.2} />
                  ) : (
                    <Plus className="w-6 h-6 md:w-8 md:h-8" strokeWidth={2.2} />
                  )}
                </AccordionTrigger>
                <AccordionContent className="px-4 md:px-6 pb-4 text-blue text-sm sm:text-base md:text-lg">
                  <p>{item.answer}</p>
                </AccordionContent>
              </div>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}
