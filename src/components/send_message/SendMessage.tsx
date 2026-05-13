import { Accordion, AccordionContent, AccordionPanel, AccordionTitle, Textarea } from "flowbite-react";

export default function SendMessage() {
    return (
        <Accordion collapseAll className="mt-5">
            <AccordionPanel>
                <AccordionTitle className="bg-primary-600 text-white font-bold hover:bg-primary-600 hover:text-white cursor-pointer">Send message</AccordionTitle>
                <AccordionContent className="bg-white p-5 rounded-md">
                    <form>
                        <Textarea id="comment" placeholder="Your message" required rows={4} />
                        <button type="submit" className="mt-5 px-6 py-2 bg-primary-600 text-white rounded hover:bg-primary-700">
                            Search
                        </button>
                    </form>
                </AccordionContent>
            </AccordionPanel>
        </Accordion>)
}
