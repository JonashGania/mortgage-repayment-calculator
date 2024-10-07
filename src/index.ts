import "./styles/style.css";
import { eventHandlers } from "./components/eventHandlers";
import formSubmission from "./components/formSubmission";

const initialLoad = (): void => {
  eventHandlers();
  formSubmission();
};

window.onload = initialLoad;
