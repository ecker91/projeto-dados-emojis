import { useState } from "react";
import "./Body.css"

const Body = () => {
  const [emojis, setEmojis] = useState(["👌","🎶","❤️","🍔","🍖","🚀","🍭","🏖️","🪤","🍕","🏴‍☠️","🎃","⚽","🏠","🎳","🏔️","🛸","🏍️","☕","🛁",
    "👍","🎵","💖","🍟","🍗","🛰️","🍬","🛳️","🪝","🍩","🦜","👻","🏀","🏡","🎯","🌋","🛥️","🛵","🍵","🛀",
    "👏","🎤","💘","🍤","🛫","🍫","🏝️","🪦","🍪","🎇","👾","🥎","🏢","🎮","🗻","🚲","🍺","🧼",
    "✌️","🎧","💓","🌭","🍣","🛬","🍿","🏜️","🪚","🍦","🎆","👺","⛹️","🏚️","🃏","🛶","🛴","🍹","🧽"]);
  const [lista, setLista] = useState([]);

  const useEmoji = () => {
    if(emojis.length > 0){
      let tempEmoji = [...emojis];
      let comprimento = tempEmoji.length;
      let random = Math.floor(Math.random() * comprimento);
      let emojiSorteado = tempEmoji.splice(random, 1);
      let tempLista = [...lista];
      tempLista.push(emojiSorteado[0]);
      setLista(tempLista);
      setEmojis(tempEmoji);
    }else{
      alert('Fim da lista!')
    }
  };

  return (
    <>
      <button onClick={useEmoji}>Clique aqui</button>
      <div className="container-body">
        <ul>
          {lista && lista.map((emoji, index) => <li key={index}>{emoji}</li>)}
        </ul>
      </div>
    </>
  );
};

export default Body;