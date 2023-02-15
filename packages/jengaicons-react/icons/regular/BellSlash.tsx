import * as React from "react";
import { forwardRef, useContext } from "react";
import type { Context } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconRegularProps } from "../../src/base";

const BellSlash = forwardRef<SVGSVGElement, JengaIconRegularProps>(
  (props, ref) => {
    const { size, color, alt, children, mirrored, weight, style } = props;

    const {
      alt: altCtx,
      children: childrenCtx,
      color: colorCtx,
      mirrored: mirroredCtx,
      size: sizeCtx,
      weight: weightCtx,
      style: styleCtx,
    } = useContext(JengaIconContext as Context<JengaIconRegularProps>);

    return (
      <svg
        width={size || sizeCtx || 32}
        height={size || sizeCtx || 32}
        transform={mirrored || mirroredCtx ? "scale(-1, 1)" : undefined}
        strokeWidth={weight || weightCtx || 2}
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
          stroke={color || colorCtx || "#000000"}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={weight || weightCtx || "2"}
          d="M12 23.073v.985c0 1.046.421 2.048 1.171 2.788A4.03 4.03 0 0 0 16 28a4.03 4.03 0 0 0 2.828-1.154A3.913 3.913 0 0 0 20 24.058v-.985M6 5l20 22"
        />
        <path
          stroke={color || colorCtx || "#000000"}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={weight || weightCtx || "2"}
          d="M26.874 23.073s-2.566-3.65-3-6.13a11.319 11.319 0 0 1-.122-2.596C24.04 9.41 20.944 4 16 4c-1.954 0-3.619.845-4.9 2.171m11.107 16.902H5.126s2.566-3.65 3-6.13c.144-.828.175-1.705.122-2.596a11.673 11.673 0 0 1 .956-5.294"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

BellSlash.displayName = "BellSlash";

export default BellSlash;
