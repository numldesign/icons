import * as React from "react";
import { forwardRef, useContext } from "react";
import type { Context, SVGSVGElement } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconRegularProps } from "../../src/base";

const Coin = forwardRef<SVGSVGElement, JengaIconRegularProps>((props, ref) => {
  const { size, color, alt, children, mirrored, weight } = props;

  const {
    alt: altCtx,
    children: childrenCtx,
    color: colorCtx,
    mirrored: mirroredCtx,
    size: sizeCtx,
    weight: weightCtx,
  } = useContext(JengaIconContext as Context<JengaIconRegularProps>);

  return (
    <svg
      width={size || sizeCtx || 32}
      height={size || sizeCtx || 32}
      transform={mirrored || mirroredCtx ? "scale(-1, 1)" : undefined}
      strokeWidth={weight || weightCtx || 2}
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 32 32"
    >
      {(!!altCtx || !!alt) && <title>{alt || altCtx}</title>}

      <path
        stroke={color || colorCtx || "#000000"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={weight || weightCtx || "2"}
        d="M16 18.77c6.627 0 12-2.48 12-5.54 0-3.058-5.373-5.538-12-5.538s-12 2.48-12 5.539c0 3.059 5.373 5.538 12 5.538ZM16 18.77v5.538"
      />
      <path
        stroke={color || colorCtx || "#000000"}
        strokeLinecap="round"
        strokeWidth={weight || weightCtx || "2"}
        d="M4 13.521v4.907c0 1.24.432 2.473 1.434 3.203 5.17 3.768 15.337 4.125 21.046.033 1.048-.752 1.52-2.031 1.52-3.322v-4.82"
      />
      <path
        stroke={color || colorCtx || "#000000"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={weight || weightCtx || "2"}
        d="M23.384 17.628v5.538M8.615 17.628v5.538"
      />

      {children || childrenCtx}
    </svg>
  );
});

Coin.displayName = "Coin";

export default Coin;
