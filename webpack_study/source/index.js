import hello_word from "./hello.js";
import world_word from "./world.js";
import _ from "lodash"; //npm 외부에서 가저오는거 install 해서
import css from './style.css'

document.querySelector("#root").innerHTML = _.join([hello_word,world_word], ' ');
console.log('css',css)