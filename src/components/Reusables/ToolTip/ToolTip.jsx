import { useCallback, useEffect, useId, useRef, useState } from "react";
import { TtBtn, TtBox, TooltipContainer } from "./ToolTipStyle";

export function TooltipButton({
  children,
  customStyle,
  ttButtonId,
  setDisplayTooltip,
}) {
  function handleClick() {
    setDisplayTooltip((prev) => !prev);
  }
  return (
    <TtBtn
      $customStyle={customStyle}
      onClick={handleClick}
      id={ttButtonId.current}
    >
      {children}
    </TtBtn>
  );
}

export default ({
  children,
  customStyle,
  position = "top",
  buttonChildren,
  buttonCustomStyle,
  tooltipBoxCustomStyle,
}) => {
  // Verify that the position prop has the right value
  if (position.toLowerCase() !== "top" && position.toLowerCase() !== "bottom") {
    throw Error("Tooltip position must be a string with value top or bottom");
  }
  // Controls the rendering of the tooltip
  const [displayTooltip, setDisplayTooltip] = useState(false);

  //These ids are used for uniquely identifying each tooltip button and box to avoid conflicts
  const ttBoxId = useRef(`id${Math.random().toString(36).substring(2, 9)}`);
  const ttButtonId = useRef(`id${Math.random().toString(36).substring(2, 9)}`);

  //
  const mousedownHandler = useCallback((e) => {
    if (
      e.target.closest(`#${ttBoxId.current}`) ||
      e.target.closest(`#${ttButtonId.current}`)
    )
      return;

    setDisplayTooltip(false);
  }, []);

  //
  useEffect(function () {
    // adds a mousedown event to the document each time a tooltip is display
    if (displayTooltip) {
      document.addEventListener("mousedown", mousedownHandler);
    }

    return () => {
      document.removeEventListener("mousedown", mousedownHandler);
    };
  });
  //
  return (
    <TooltipContainer $customStyle={customStyle}>
      <TooltipButton
        customStyle={buttonCustomStyle}
        setDisplayTooltip={setDisplayTooltip}
        ttButtonId={ttButtonId}
      >
        {buttonChildren}
      </TooltipButton>
      {displayTooltip && (
        <TtBox
          $customStyle={tooltipBoxCustomStyle}
          $position={position}
          id={ttBoxId.current}
        >
          {children}
        </TtBox>
      )}
    </TooltipContainer>
  );
};
