import * as React from "react";
import { forwardRef, useContext } from "react";
import { JengaIconContext } from "../../src/base";
import type { JengaIconProps } from "../../src/base";

const SwordFill = forwardRef<SVGSVGElement, JengaIconProps>((props, ref) => {
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
        d="M28.808 4.904a1 1 0 0 1 .291.765l-.455 7.824a1 1 0 0 1-.342.696l-9.6 8.35 1.039 1.039a.5.5 0 0 1 0 .707l-2.65 2.65a.5.5 0 0 1-.707 0l-3.249-3.25a.5.5 0 0 0-.707 0l-4.122 4.123a.5.5 0 0 1-.707 0l-2.633-2.633a.5.5 0 0 1 0-.707l4.122-4.122a.5.5 0 0 0 0-.707l-2.77-2.771a.5.5 0 0 1 0-.707l2.65-2.65a.5.5 0 0 1 .706 0l1.5 1.5 8.349-9.6a1 1 0 0 1 .696-.343l7.824-.455a1 1 0 0 1 .765.291ZM14.064 17.901l-1.473-1.473 8.165-9.388 6.281-.365-.365 6.281-9.388 8.165-1.806-1.806 6.637-6.637a1 1 0 1 0-1.414-1.414L14.064 17.9Z"
        clipRule="evenodd"
      />

      {children || childrenCtx}
    </svg>
  );
});

SwordFill.displayName = "SwordFill";

export default SwordFill;
