import { Dispatch, UnknownAction } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { LibDialog, LibDialogProps } from "./LibDialog";

interface DialogButton {
  title: string;
  onPress: (dispatch: Dispatch<UnknownAction>) => void;
}

interface DialogProps extends Pick<LibDialogProps, "title" | "description"> {
  primaryButton?: DialogButton;
  secondaryButton?: DialogButton;
}

export const Dialog = ({
  primaryButton,
  secondaryButton,
  ...props
}: DialogProps) => {
  const dispatch = useDispatch();

  const handleInterceptClick = (button?: DialogButton) => {
    if (button) {
      button.onPress(dispatch);
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
