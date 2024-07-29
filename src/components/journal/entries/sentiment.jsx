// sentiment analysis on static text

import { useState, useEffect, useRef, useCallback } from "react";
import { BadgeDefault } from "../../badge";

const formatPercentage = (n) => Math.round(n * 100);

const Sentiment = ({ text }) => {
  const [result, setResult] = useState(null);
  const [ready, setReady] = useState(null);

  const worker = useRef(null);

  const classify = useCallback((text) => {
    if (worker.current) {
      worker.current.postMessage({ text });
    }
  }, []);

  useEffect(() => {
    if (!worker.current) {
      // Create the worker if it does not yet exist.
      // Create absolute url to worker script
      worker.current = new Worker(new URL("../worker.js", import.meta.url), {
        type: "module",
      });
    }

    // Create a callback function for messages from the worker thread.
    const onMessageReceived = (e) => {
      switch (e.data.status) {
        case "initiate":
          setReady(false);
          break;
        case "ready":
          setReady(true);
          break;
        case "complete":
          setResult(e.data.output[0]);
          break;
      }
    };

    worker.current.addEventListener("message", onMessageReceived);

    classify(text);

    return () =>
      worker.current.removeEventListener("message", onMessageReceived);
  });

  return (
    <div>
      {ready !== null && (
        <BadgeDefault>
          {ready && result
            ? `${result.label} ${formatPercentage(result.score)}%`
            : "Loading..."}
        </BadgeDefault>
      )}
    </div>
  );
};

export default Sentiment;
