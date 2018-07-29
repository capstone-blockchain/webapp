import { takeEvery } from "redux-saga/effects";

import {
  UPLOAD_PROJECT_PICTURE_REQUESTED,
  UPLOAD_UPDATE_ATTACHMENT_REQUESTED
} from "../actions/types";
import { uploadProjectPicture } from "./project-picture-upload";
import { uploadAttachments } from "./update-attachment-upload";

function* rootSaga() {
  yield takeEvery(UPLOAD_PROJECT_PICTURE_REQUESTED, uploadProjectPicture);
  yield takeEvery(UPLOAD_UPDATE_ATTACHMENT_REQUESTED, uploadAttachments);
}

export default rootSaga;
