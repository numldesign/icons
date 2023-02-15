import * as React from "react";
import { forwardRef, useContext } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const GraphFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M28.96 9.958c0 .927-.7 1.691-1.601 1.791-.009.1-.032.2-.073.298l-3.873 9.344a.996.996 0 0 1-.436.49 1.803 1.803 0 1 1-3.456.41.996.996 0 0 1-.405-.247l-4.604-4.604a.997.997 0 0 1-.215-.32 1.808 1.808 0 0 1-.791.011.995.995 0 0 1-.251.42l-4.493 4.493a1 1 0 0 1-.238.176 1.803 1.803 0 1 1-1.345-1.367c.044-.08.1-.155.169-.223l4.493-4.493a.997.997 0 0 1 .32-.216 1.803 1.803 0 1 1 3.462-.104c.11.05.213.119.303.21l4.604 4.603a.999.999 0 0 1 .17.227 1.799 1.799 0 0 1 .82-.092 1.02 1.02 0 0 1 .046-.14l3.873-9.343a.998.998 0 0 1 .217-.325 1.803 1.803 0 1 1 3.304-.999Z"
        clipRule="evenodd"
      />

      {children || childrenCtx}
    </svg>
  );
});

GraphFill.displayName = "GraphFill";

export default GraphFill;
