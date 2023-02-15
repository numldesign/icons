import * as React from "react";
import { forwardRef, useContext } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const CloudArrowUpFill = forwardRef<SVGSVGElement, JengaIconProps>(
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
          d="M12.447 13.04a6.003 6.003 0 0 0-5.99 9.781 6.001 6.001 0 0 0 4.499 2.035h9.605c1.936 0 3.869-.529 5.265-1.87.488-.468.981-.995 1.42-1.559a8.574 8.574 0 0 0-11.872-12.1c-1.102.795-2.308 2.504-2.927 3.713Zm2.738 4.587a1 1 0 0 0 1.414 0l1.93-1.93v6.159a1 1 0 1 0 2 0v-6.159l1.93 1.93a1 1 0 1 0 1.415-1.414L20.25 12.59a.997.997 0 0 0-1.428-.015l-3.637 3.638a1 1 0 0 0 0 1.414Z"
          clipRule="evenodd"
        />

        {children || childrenCtx}
      </svg>
    );
  }
);

CloudArrowUpFill.displayName = "CloudArrowUpFill";

export default CloudArrowUpFill;
