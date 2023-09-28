import React, { useEffect, useState, useMemo } from "react";
import "../scss/bibliotecaUI/maquinaDeEscribir2.scss";

const WordFlicker = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentWord, setCurrentWord] = useState("");
  const [forwards, setForwards] = useState(true);
  const skipDelay = 15;
  const speed = 70;

  const words = useMemo(() => ["Bienvenidx a una parte de mi galaxia..."], []);

  useEffect(() => {
    let offset = 0;
    let skipCount = 0;

    const wordFlickInterval = setInterval(() => {
      if (forwards) {
        if (offset >= words[currentWordIndex].length) {
          skipCount++;
          if (skipCount === skipDelay) {
            setForwards(false);
            skipCount = 0;
          }
        }
      } else {
        if (offset === 0) {
          setForwards(true);
          setCurrentWordIndex((prevIndex) =>
            prevIndex === words.length - 1 ? 0 : prevIndex + 1
          );
        }
      }

      const newOffset = forwards ? offset + 1 : offset - 1;
      const newPart = words[currentWordIndex].substring(0, newOffset);

      if (skipCount === 0) {
        offset = newOffset;
        setCurrentWord(newPart);
      }
    }, speed);

    return () => {
      clearInterval(wordFlickInterval);
    };
  }, [currentWordIndex, forwards, words]);

  return <div className="word">{currentWord}</div>;
};

export default WordFlicker;
