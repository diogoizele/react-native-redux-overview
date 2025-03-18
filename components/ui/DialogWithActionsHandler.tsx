import { UnknownAction } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { LibDialog, LibDialogProps } from "./LibDialog";

interface DialogButton {
  title: string;
  onPress: () => void;
  actions?: UnknownAction[];
  priority?: "onPress" | "actions";
}

interface DialogProps extends Pick<LibDialogProps, "title" | "description"> {
  primaryButton?: DialogButton;
  secondaryButton?: DialogButton;
}

export const DialogWithActionsHandler = ({
  primaryButton,
  secondaryButton,
  ...props
}: DialogProps) => {
  const dispatch = useDispatch();

  const handleInterceptClick = (button?: DialogButton) => {
    if (button && button.priority === "onPress") {
      button.onPress();
    }

    if (button?.actions?.length) {
      button.actions?.forEach((action) => {
        dispatch({ type: action.type, payload: action.payload });
      });

      if (button.onPress && button.priority !== "onPress") {
        button.onPress();
      }
    }
  };

  return (
    <LibDialog
      {...props}
      primaryButton={
        primaryButton && {
          title: primaryButton.title,
          onPress: () => handleInterceptClick(primaryButton),
        }
      }
      secondaryButton={
        secondaryButton && {
          title: secondaryButton.title,
          onPress: () => handleInterceptClick(secondaryButton),
        }
      }
    />
  );
};
