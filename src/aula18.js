// Módulos (CommonJs vs ES Modules)

import { sum, sub } from "../functions/math.js";
import { catEmoji, dogEmoji } from "../constants/emojis.js";

console.log(sum(1, 2));
console.log(sub(5, 1));
console.log(catEmoji, dogEmoji);
