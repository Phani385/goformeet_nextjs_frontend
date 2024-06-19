import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  return (
    <div className="custom-container my-10">
      <h2 className="font-bold text-center mb-6 text-2xl lg:text-3xl xl:text-4xl">
        <span className="text-[#E03300]">Frequently</span> Asked Questions
      </h2>

      <Accordion className="w-3/4 mx-auto" type="single" collapsible>
        <AccordionItem value="item-1" className="border-b-[#FCEBE6] data-[state=open]:text-[#A92600]">
          <AccordionTrigger>
            01 How does #Goformeet guarantee that my meetings will happen?
          </AccordionTrigger>
          <AccordionContent className="text-black">
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2" className="border-b-[#FCEBE6] data-[state=open]:text-[#A92600]">
          <AccordionTrigger>
            02 What types of professionals can I book meetings with on
            #Goformeet?
          </AccordionTrigger>
          <AccordionContent className="text-black">
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3" className="border-b-[#FCEBE6] data-[state=open]:text-[#A92600]">
          <AccordionTrigger>
            03 How do I schedule a meeting on #Goformeet?
          </AccordionTrigger>
          <AccordionContent className="text-black">
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4" className="border-b-[#FCEBE6] data-[state=open]:text-[#A92600]">
          <AccordionTrigger>
            04 What happens if I need to reschedule or cancel a meeting?
          </AccordionTrigger>
          <AccordionContent className="text-black">
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default FAQSection;
