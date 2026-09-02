import { useState } from "react";

// Generic client-side form state machine: idle -> submitting -> success | error
// There is no backend wired up yet, so "success" only means the form passed
// validation — it never claims an email/message was actually delivered.
export function useFormSubmit(onSubmit) {
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error
  const [errorMessage, setErrorMessage] = useState("");

  const submit = async (data) => {
    setStatus("submitting");
    setErrorMessage("");
    try {
      await onSubmit?.(data);
      setStatus("success");
    } catch (err) {
      setStatus("error");
      setErrorMessage(err?.message || "Something went wrong. Please try again.");
    }
  };

  const reset = () => {
    setStatus("idle");
    setErrorMessage("");
  };

  return { status, errorMessage, submit, reset };
}
