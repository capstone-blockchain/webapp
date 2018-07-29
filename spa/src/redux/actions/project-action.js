import {
  UPDATE_UPLOADED_PROJECT_ATTACHMENTS,
  REMOVE_UPLOADED_PROJECT_ATTACHMENT,
  UPDATE_PROJECT_UPDATE_TAGS,
  RESET_PROJECT_REDUCER_STATE
} from "./types"

export function updateAttachments(files) {
  return {
    type: UPDATE_UPLOADED_PROJECT_ATTACHMENTS,
    files
  }
}

export function removeAttachment(index) {
  return {
    type: REMOVE_UPLOADED_PROJECT_ATTACHMENT,
    index
  }
}

export function updateProjectUpdateTags(tags) {
  return {
    type: UPDATE_PROJECT_UPDATE_TAGS,
    tags
  }
}

export function resetState() {
  return {
    type: RESET_PROJECT_REDUCER_STATE
  }
}
