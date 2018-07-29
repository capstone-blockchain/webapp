import { call } from "redux-saga/effects";

import baseService from "./baseService";

export function* uploadAttachments(action) {
  try {
    yield call(upload, action);
    window.location.reload();
  } catch (e) {}
}

function upload(action) {
  const formData = new FormData();
  formData.append("update_id", action.updateId);
  formData.append("project_id", action.projectId);
  for (const file of action.files) {
    formData.append("update_attachments", file);
  }

  return new Promise((resolve, reject) => {
    baseService("POST", "/upload/update_attachments", formData)
      .then(res => {
        resolve(res.data);
      })
      .catch(err => {
        reject(err.message);
      });
  });
}
