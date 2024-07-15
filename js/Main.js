import { loadInitialPage } from "./modules/Links.js";
import { loadMenu } from "./modules/Menu.js";
import { loadValidation } from "./modules/Validation.js";
import { loadRepositorys } from "./modules/ApiGithub.js";

loadInitialPage();
loadMenu();
loadValidation();
loadRepositorys();
