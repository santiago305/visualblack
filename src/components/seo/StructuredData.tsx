import { useEffect } from "react";

type Props = {
  id: string;
  data: Record<string, unknown>;
};

export function StructuredData({ id, data }: Props) {
  const serializedData = JSON.stringify(data);

  useEffect(() => {
    const scriptId = `structured-data-${id}`;
    let element = document.getElementById(scriptId) as HTMLScriptElement | null;

    if (!element) {
      element = document.createElement("script");
      element.id = scriptId;
      element.type = "application/ld+json";
      document.head.appendChild(element);
    }

    element.text = serializedData;

    return () => {
      element?.remove();
    };
  }, [id, serializedData]);

  return null;
}
