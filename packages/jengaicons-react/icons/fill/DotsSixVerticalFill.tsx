import * as React from "react";
import { forwardRef, useContext } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const DotsSixVerticalFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M11.56 22.744a2.77 2.77 0 1 1 0 5.539 2.77 2.77 0 0 1 0-5.539Zm0-9.23a2.77 2.77 0 1 1 0 5.538 2.77 2.77 0 0 1 0-5.539Zm2.769-6.462a2.77 2.77 0 1 0-5.538 0 2.77 2.77 0 0 0 5.538 0Zm8.03 15.692a2.77 2.77 0 1 1 0 5.539 2.77 2.77 0 0 1 0-5.539Zm0-9.23a2.77 2.77 0 1 1 0 5.538 2.77 2.77 0 0 1 0-5.539Zm2.77-6.462a2.77 2.77 0 1 0-5.539 0 2.77 2.77 0 0 0 5.539 0Z"
          clipRule="evenodd"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

DotsSixVerticalFill.displayName = "DotsSixVerticalFill";

export default DotsSixVerticalFill;
