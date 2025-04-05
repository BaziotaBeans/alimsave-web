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

  // Função para lidar com a mudança de valor do acordeão
  const handleValueChange = (value: string) => {
    // Resetar todos os itens para fechado
    const resetState = {
      "item-1": false,
      "item-2": false,
      "item-3": false,
      "item-4": false,
    };

    // Se um valor foi selecionado, marque apenas esse como aberto
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
    <div className="relative bg-blue flex flex-col">
      <div className="flex flex-col py-16 gap-4 w-[80%] mx-auto">
        <h1 className="text-white text-5xl font-montserrat font-extrabold mb-8">
          Perguntas frequentes
        </h1>

        <Accordion
          type="single"
          collapsible
          className="space-y-4"
          onValueChange={handleValueChange}
        >
          <AccordionItem value="item-1" className="border-0">
            <div className="bg-white rounded-lg">
              <AccordionTrigger
                className="cursor-pointer p-8 text-blue text-3xl font-medium hover:no-underline flex items-center justify-between w-full"
                hideDefaultIcon
              >
                <span className="text-left font-extrabold flex">
                  Em quais províncias o AlimSave está presente?
                </span>

                {openItems["item-1"] ? (
                  <Minus className="w-8 h-8" strokeWidth={2.2} />
                ) : (
                  <Plus className="w-8 h-8" strokeWidth={2.2} />
                )}
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-blue">
                <p>
                  O AlimSave está atualmente presente nas províncias de Lisboa, Porto, Coimbra, Faro
                  e Braga. Estamos em constante expansão para atender mais regiões em breve.
                </p>
              </AccordionContent>
            </div>
          </AccordionItem>

          <AccordionItem value="item-2" className="border-0">
            <div className="bg-white rounded-lg">
              <AccordionTrigger
                className="cursor-pointer p-8 text-blue text-3xl font-medium hover:no-underline flex items-center justify-between w-full"
                hideDefaultIcon
              >
                <span className="text-left font-extrabold">
                  O AlimSave cobre promoções de outros estabelecimentos?
                </span>

                {openItems["item-2"] ? (
                  <Minus className="w-8 h-8" strokeWidth={2.2} />
                ) : (
                  <Plus className="w-8 h-8" strokeWidth={2.2} />
                )}
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-blue">
                <p>
                  Sim, o AlimSave cobre promoções de diversos estabelecimentos parceiros, incluindo
                  supermercados, mercearias locais e lojas de produtos alimentícios especializados.
                  Nossa rede de parceiros está sempre crescendo para oferecer mais opções aos nossos
                  usuários.
                </p>
              </AccordionContent>
            </div>
          </AccordionItem>

          <AccordionItem value="item-3" className="border-0">
            <div className="bg-white rounded-lg">
              <AccordionTrigger
                className="cursor-pointer p-8 text-blue text-3xl font-medium hover:no-underline flex justify-between w-full"
                hideDefaultIcon
              >
                <span className="text-left font-extrabold">Como funciona o AlimSave?</span>

                {openItems["item-3"] ? (
                  <Minus className="w-8 h-8" strokeWidth={2.2} />
                ) : (
                  <Plus className="w-8 h-8" strokeWidth={2.2} />
                )}
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-blue">
                <p>
                  O AlimSave funciona como uma plataforma que conecta consumidores a
                  estabelecimentos que oferecem alimentos com descontos próximos à data de validade.
                  Basta cadastrar-se no aplicativo, buscar ofertas próximas à sua localização e
                  reservar os produtos que deseja adquirir com desconto.
                </p>
              </AccordionContent>
            </div>
          </AccordionItem>

          <AccordionItem value="item-4" className="border-0">
            <div className="bg-white rounded-lg">
              <AccordionTrigger
                className="cursor-pointer p-8 text-blue text-3xl font-medium hover:no-underline flex justify-between w-full"
                hideDefaultIcon
              >
                <span className="text-left font-extrabold">Qual é o propósito do AlimSave?</span>

                {openItems["item-4"] ? (
                  <Minus className="w-8 h-8" strokeWidth={2.2} />
                ) : (
                  <Plus className="w-8 h-8" strokeWidth={2.2} />
                )}
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-blue">
                <p>
                  O propósito do AlimSave é combater o desperdício de alimentos, oferecendo uma
                  solução que beneficia tanto os consumidores, que podem comprar produtos com
                  desconto, quanto os estabelecimentos, que reduzem suas perdas. Nosso objetivo é
                  criar um sistema alimentar mais sustentável e acessível para todos.
                </p>
              </AccordionContent>
            </div>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}
