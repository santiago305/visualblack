import { useEffect } from "react";

import type { SeoMetadata } from "@/lib/seo";

type Props = {
  metadata: SeoMetadata;
};

function upsertMeta(
  attribute: "name" | "property",
  value: string,
  content: string,
) {
  const selector = `meta[${attribute}="${value}"]`;
  let element = document.head.querySelector(selector) as HTMLMetaElement | null;

  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, value);
    document.head.appendChild(element);
  }

  element.content = content;
}

function removeMeta(attribute: "name" | "property", value: string) {
  const element = document.head.querySelector(`meta[${attribute}="${value}"]`);
  element?.remove();
}

function upsertLink(rel: string, href: string) {
  const selector = `link[rel="${rel}"]`;
  let element = document.head.querySelector(selector) as HTMLLinkElement | null;

  if (!element) {
    element = document.createElement("link");
    element.rel = rel;
    document.head.appendChild(element);
  }

  element.href = href;
}

function removeLink(rel: string) {
  const element = document.head.querySelector(`link[rel="${rel}"]`);
  element?.remove();
}

export function PageSeo({ metadata }: Props) {
  useEffect(() => {
    document.title = metadata.title;

    upsertMeta("name", "description", metadata.description);
    upsertMeta("name", "keywords", metadata.keywords.join(", "));
    upsertMeta("name", "robots", metadata.robots);

    upsertMeta("property", "og:title", metadata.title);
    upsertMeta("property", "og:description", metadata.description);
    upsertMeta("property", "og:type", metadata.openGraphType);
    upsertMeta("property", "og:site_name", metadata.siteName);
    upsertMeta("property", "og:locale", metadata.locale);
    upsertMeta("property", "og:image", metadata.image);
    upsertMeta("property", "og:image:alt", metadata.imageAlt);

    upsertMeta("name", "twitter:card", "summary_large_image");
    upsertMeta("name", "twitter:title", metadata.title);
    upsertMeta("name", "twitter:description", metadata.description);
    upsertMeta("name", "twitter:image", metadata.image);

    if (metadata.canonical) {
      upsertLink("canonical", metadata.canonical);
      upsertMeta("property", "og:url", metadata.url ?? metadata.canonical);
    } else {
      removeLink("canonical");
      removeMeta("property", "og:url");
    }
  }, [metadata]);

  return null;
}
