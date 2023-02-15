import * as React from "react";
import { forwardRef, useContext } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const SoccerBallFill = forwardRef<SVGSVGElement, JengaIconProps>(
  (props, ref) => {
    const { size, color, alt, children, mirrored, style } = props;

    const {
      alt: altCtx,
      children: childrenCtx,
      color: colorCtx,
      mirrored: mirroredCtx,
      size: sizeCtx,
      style: styleCtx,
    } = useContext(JengaIconContext);

    return (
      <svg
        width={size || sizeCtx || 32}
        height={size || sizeCtx || 32}
        transform={mirrored || mirroredCtx ? "scale(-1, 1)" : undefined}
        ref={ref}
        style={{
          ...styleCtx,
          ...style,
        }}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 32 32"
      >
        {(!!altCtx || !!alt) && <title>{alt || altCtx}</title>}

        <path
          fill={color || colorCtx || "#000000"}
          fillRule="evenodd"
          d="M13.563 5.818A11.023 11.023 0 0 0 8.057 9.82l.913 2.814 3.997 1.299 2.993-2.175V7.557l-2.397-1.74ZM5.96 16.278v.005c0 2.418.78 4.654 2.103 6.47l2.96.001 2.469-3.399-1.143-3.519-3.997-1.299-2.392 1.74Zm7.597 10.469c1.072.348 2.215.536 3.403.536a10.99 10.99 0 0 0 3.403-.537l.917-2.816-2.459-3.384-.01-.016h-3.7l-2.47 3.4.916 2.817Zm12.3-3.994a10.95 10.95 0 0 0 2.103-6.47v-.005L25.653 14.6a1.014 1.014 0 0 1-.143.06l-3.977 1.291-1.105 3.404.011.016 2.459 3.383 2.959-.001Zm.006-12.932a11.023 11.023 0 0 0-5.506-4.003l-2.397 1.74v4.202l3.09 2.245 3.842-1.248.02-.006.95-2.93ZM16.96 3.283c-7.18 0-13 5.82-13 13s5.82 13 13 13 13-5.82 13-13-5.82-13-13-13Z"
          clipRule="evenodd"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

SoccerBallFill.displayName = "SoccerBallFill";

export default SoccerBallFill;
