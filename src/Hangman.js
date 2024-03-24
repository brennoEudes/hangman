import { useEffect, useState } from "react";
import Progress from "./Progress.js";
import Popup from "./Popup.js";

export default function Hangman() {
  // lista letras alfabeto:
  const alphabets = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  // lista animais:
  const animals = [
    "aardvark",
    "albatross",
    "alligator",
    "alpaca",
    "ant",
    "anteater",
    "antelope",
    "ape",
    "armadillo",
    "donkey",
    "baboon",
    "badger",
    "barracuda",
    "bat",
    "bear",
    "beaver",
    "bee",
    "bison",
    "boar",
    "buffalo",
    "butterfly",
    "camel",
    "capybara",
    "caribou",
    "cassowary",
    "cat",
    "caterpillar",
    "cattle",
    "chamois",
    "cheetah",
    "chicken",
    "chimpanzee",
    "chinchilla",
    "chough",
    "clam",
    "cobra",
    "cockroach",
    "cod",
    "cormorant",
    "coyote",
    "crab",
    "crane",
    "crocodile",
    "crow",
    "curlew",
    "deer",
    "dinosaur",
    "dog",
    "dogfish",
    "dolphin",
    "donkey",
    "dotterel",
    "dove",
    "dragonfly",
    "duck",
    "dugong",
    "dunlin",
    "eagle",
    "echidna",
    "eel",
    "eland",
    "elephant",
    "elk",
    "emu",
    "falcon",
    "ferret",
    "finch",
    "fish",
    "flamingo",
    "fly",
    "fox",
    "frog",
    "gaur",
    "gazelle",
    "gerbil",
    "giraffe",
    "gnat",
    "gnu",
    "goat",
    "goose",
    "goldfinch",
    "goldfish",
    "gorilla",
    "goshawk",
    "grasshopper",
    "grouse",
    "guanaco",
    "gull",
    "hamster",
    "hare",
    "hawk",
    "hedgehog",
    "heron",
    "herring",
    "hippopotamus",
    "hornet",
    "horse",
    "human",
    "hummingbird",
    "hyena",
    "ibex",
    "ibis",
    "jackal",
    "jaguar",
    "jay",
    "jellyfish",
    "kangaroo",
    "kingfisher",
    "koala",
    "komododragon",
    "kookabura",
    "kouprey",
    "kudu",
    "lapwing",
    "lark",
    "lemur",
    "leopard",
    "lion",
    "llama",
    "lobster",
    "locust",
    "loris",
    "louse",
    "lyrebird",
    "magpie",
    "mallard",
    "manatee",
    "mandrill",
    "mantis",
    "marten",
    "meerkat",
    "mink",
    "mole",
    "mongoose",
    "monkey",
    "moose",
    "mouse",
    "mosquito",
    "mule",
    "narwhal",
    "newt",
    "nightingale",
    "octopus",
    "okapi",
    "opossum",
    "oryx",
    "ostrich",
    "otter",
    "owl",
    "ox",
    "oyster",
    "panther",
    "parrot",
    "partridge",
    "peafowl",
    "pelican",
    "penguin",
    "pheasant",
    "pig",
    "pigeon",
    "polarbear",
    "pony",
    "porcupine",
    "porpoise",
    "quail",
    "quelea",
    "quetzal",
    "rabbit",
    "raccoon",
    "rail",
    "ram",
    "rat",
    "raven",
    "reindeer",
    "rhinoceros",
    "rook",
    "salamander",
    "salmon",
    "sandpiper",
    "sardine",
    "scorpion",
    "sealion",
    "seaurchin",
    "seahorse",
    "seal",
    "shark",
    "sheep",
    "shrew",
    "skunk",
    "snail",
    "snake",
    "sparrow",
    "spider",
    "spoonbill",
    "squid",
    "squirrel",
    "starling",
    "stingray",
    "stinkbug",
    "stork",
    "swallow",
    "swan",
    "tapir",
    "tarsier",
    "termite",
    "tiger",
    "toad",
    "trout",
    "turkey",
    "turtle",
    "vicuña",
    "viper",
    "vulture",
    "wallaby",
    "walrus",
    "wasp",
    "weasel",
    "whale",
    "wolf",
    "wolverine",
    "wombat",
    "woodcock",
    "woodpecker",
    "worm",
    "wren",
    "yak",
    "zebra",
  ];

  const [word, setWord] = useState("");
  const [corrects, setCorrects] = useState([]);
  const [fails, setFails] = useState([]);
  const [status, setStatus] = useState("");

  // pegando uma palavra randomicamente em "animals":
  const randomizeWord = () =>
    setWord(animals[Math.floor(Math.random() * animals.length)].toUpperCase());

  // resetando a aplicação:
  const reset = () => {
    randomizeWord();
    setCorrects([]);
    setFails([]);
    setStatus("");
  };

  // checando se a letra existe na palavra:
  const onGuess = (letter) => {
    if (word.includes(letter)) {
      setCorrects([...corrects, letter]);
    } else {
      setFails([...fails, letter]);
    }
  };

  useEffect(() => {
    // verifica se todas as letras estão corretas
    if (
      corrects.length &&
      word.split("").every((letter) => corrects.includes(letter))
    ) {
      setStatus("winner");
    }
  }, [corrects, word]);

  useEffect(() => {
    // verifica nº tentativas
    if (fails.length === 10) {
      setStatus("looser");
    }
  }, [fails]);

  useEffect(reset, []);

  // escondendo a palavra p/usuário:
  const maskWord = word
    .split("")
    .map((letter) => (corrects.includes(letter) ? letter : "_")) // se certa, apresenta a letra! Se ñ, nada.
    .join("");

  return (
    <>
      <div className="hangman">
        <p className="mask">{maskWord}</p>
        <div className="alphabet-letters">
          {alphabets.map((letter, index) => (
            <button
              disabled={corrects.includes(letter) || fails.includes(letter)} // bloqueia letra após seleção
              onClick={() => onGuess(letter)}
              key={index}
            >
              {letter}
            </button>
          ))}
          <Progress fails={fails.length} />
          {(status === "winner" || status === "looser") && (
            <Popup status={status} word={word} reset={reset} />
          )}{" "}
        </div>
      </div>
    </>
  );
}
