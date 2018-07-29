import {
  SET_CURRENT_DISPLAY_UPDATE,
  RESET_UPDATE_REDUCER_STATE,
  REMOVE_UPDATE_IMAGE_ATTACHMENT,
  REMOVE_UPDATE_OTHER_ATTACHMENT,
  UPLOAD_UPDATE_ATTACHMENT_REQUESTED,
  SET_CURRENT_UPDATE_ATTACHMENT
} from "./types";

export function setCurrentSelectUpdate(update) {
  return {
    type: SET_CURRENT_DISPLAY_UPDATE,
    update
  };
}

export function resetState() {
  return {
    type: RESET_UPDATE_REDUCER_STATE
  };
}

export function removeImageAttachment(index) {
  return {
    type: REMOVE_UPDATE_IMAGE_ATTACHMENT,
    index
  };
}

export function removeOtherAttachment(index) {
  return {
    type: REMOVE_UPDATE_OTHER_ATTACHMENT,
    index
  };
}

export function uploadAttachment(projectId, updateId, files) {
  return {
    type: UPLOAD_UPDATE_ATTACHMENT_REQUESTED,
    projectId,
    updateId,
    files
  };
}

export function setCurrentUpdateAttachments(attachments) {
  return {
    type: SET_CURRENT_UPDATE_ATTACHMENT,
    attachments
  };
}
