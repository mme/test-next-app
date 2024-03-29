"use client";
import {
  useCopilotAction,
  useMakeCopilotReadable,
} from "@copilotkit/react-core";
import { useState } from "react";

export default function InsideHome() {
  const [message, setMessage] = useState("Hello World!");
  const [text, setText] = useState("");
  useMakeCopilotReadable(
    "This is the current message: " + JSON.stringify(message)
  );
  useCopilotAction(
    {
      name: "displayMessage",
      description: "Display a message.",
      parameters: [
        {
          name: "message",
          type: "string",
          description: "The message to display.",
          required: true,
        },
      ],
      handler: async ({ message }) => {
        setMessage(message);
      },
      render: (props) => {
        return (
          <div style={{ backgroundColor: "black", color: "white" }}>
            <div>Status: {props.status}</div>
            <div>Message: {props.args.message}</div>
          </div>
        );
      },
    },
    []
  );
  return (
    <>
      <div>{message}</div>
    </>
  );
}
