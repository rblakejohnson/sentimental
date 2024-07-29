import { useState, useEffect, useRef, useCallback } from "react";
import { Stack } from "../stack";
import { Row } from "../row";
import { TextSmall } from "../typography";
import { ButtonPrimary } from "../button";
import { BadgeDefault } from "../badge";
import { Input } from "../input";

const formatPercentage = (n) => Math.round(n * 100);

const Journal = ({ onSubmit }) => {
  const [result, setResult] = useState(null);
  const [ready, setReady] = useState(null);

  const worker = useRef(null);

  useEffect(() => {
    if (!worker.current) {
      // Create the worker if it does not yet exist.
      // Create absolute url to worker script
      worker.current = new Worker(new URL("./worker.js", import.meta.url), {
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

    // cleanup when the component is unmounted.
    return () =>
      worker.current.removeEventListener("message", onMessageReceived);
  });

  // memoize so classify isn't created every render
  const classify = useCallback((text) => {
    if (worker.current) {
      worker.current.postMessage({ text });
    }
  }, []);

  return (
    <Stack
      as="form"
      gap="md"
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(e.target.entry.value);
      }}
    >
      {/* This could be a rich text editor with placeholder or token fill-ins */}
      <Input
        as="textarea"
        type={null}
        name="entry"
        placeholder="Record your thoughts..."
        onInput={(e) => classify(e.target.value)}
      />
      <Row gap="sm" align="center" justify="space-between">
        <TextSmall>
          Sentiment analysis:{" "}
          {ready !== null && (
            <BadgeDefault>
              {ready && result
                ? `${result.label} ${formatPercentage(result.score)}%`
                : "Loading..."}
            </BadgeDefault>
          )}
        </TextSmall>
        <ButtonPrimary type="submit">Save</ButtonPrimary>
      </Row>
    </Stack>
  );
};

export default Journal;
