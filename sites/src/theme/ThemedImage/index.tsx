import React, { type ReactNode } from "react";
import { ThemedComponent } from "@docusaurus/theme-common";
import type { Props } from "@theme/ThemedImage";
import LogoSvg from "@site/static/assets/img/logo.svg";

export default function ThemedImage(props: Props): ReactNode {
  const { sources, className: parentClassName, alt, ...propsRest } = props;
  return (
    <ThemedComponent className={parentClassName}>
      {({ theme, className }) => {
        const src = sources[theme];
        const isLogo = src?.endsWith("img/logo.svg");
        if (isLogo) {
          return <LogoSvg className={className} {...propsRest} />;
        }
        return (
          <img
            src={src}
            alt={alt}
            className={className}
            {...propsRest}
          />
        );
      }}
    </ThemedComponent>
  );
}
