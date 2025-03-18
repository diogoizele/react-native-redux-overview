import { useSelector } from "react-redux";
import {
  selectDialog,
  selectDialogWithActionsHandler,
} from "../stores/saga/utils";
import { Dialog } from "./ui/Dialog";
import { DialogWithActionsHandler } from "./ui/DialogWithActionsHandler";
import { Loader } from "./ui/Loader";

export const FeedbackController = () => {
  const dialog = useSelector(selectDialog);
  const dialogWithActionsHandler = useSelector(selectDialogWithActionsHandler);

  return (
    <>
      <Loader />
      {dialog.visible && <Dialog {...dialog.options} />}
      {dialogWithActionsHandler.visible && (
        <DialogWithActionsHandler {...dialogWithActionsHandler.options} />
      )}
    </>
  );
};
