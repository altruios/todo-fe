import { useAccordionItemContext } from "@reach/accordion";
import "@reach/accordion/styles.css";

function AccordionButtonTaskText({ textIfExpanded, textIfCollapsed }) {
  const { isExpanded } = useAccordionItemContext();

  return isExpanded ? textIfExpanded : textIfCollapsed;
}

export default AccordionButtonTaskText;
