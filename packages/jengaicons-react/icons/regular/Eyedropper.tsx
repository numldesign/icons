import * as React from "react";
import { forwardRef, useContext } from "react";
import type { Context } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconRegularProps } from "../../src/base";

const Eyedropper = forwardRef<SVGSVGElement, JengaIconRegularProps>(
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
          d="m23.125 14.226.658.658a2.155 2.155 0 0 1 0 3.047l-.946.947a1.077 1.077 0 0 1-1.524 0l-8.172-8.172a1.077 1.077 0 0 1 0-1.524l.947-.946a2.155 2.155 0 0 1 3.047 0l.658.658 3.715-3.715c1.453-1.453 3.82-1.542 5.312-.13a3.771 3.771 0 0 1 .076 5.407l-3.77 3.77Z"
        />
        <path
          stroke={color || colorCtx || "#000000"}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={weight || weightCtx || "2"}
          d="m20.274 17.839-7.54 7.541a4.307 4.307 0 0 1-4.163 1.116l-3.152 1.376a1.078 1.078 0 0 1-1.192-.226v0a.773.773 0 0 1-.162-.856l1.458-3.341a4.307 4.307 0 0 1 1.116-4.163l7.541-7.541"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

Eyedropper.displayName = "Eyedropper";

export default Eyedropper;
