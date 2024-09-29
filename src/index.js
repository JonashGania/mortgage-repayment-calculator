import "./styles/style.css";
import { eventHandlers } from "./components/eventHandlers";
import formSubmission from "./components/formSubmission";

const initialLoad = () => {
  eventHandlers();
  formSubmission();
};

window.onload = initialLoad();
