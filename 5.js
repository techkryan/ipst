// в строке 'DDADSADASDAAADS' все уникальные буквы вынести в отдельную строку "DAS"
"use strict";

const str = 'DDADSADASDAAADS';

const unique = (str) => ''.concat(...new Set(str));

alert(unique(str));