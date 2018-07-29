import { call } from "redux-saga/effects";

import baseService from "./baseService";

export function* uploadProjectPicture(action) {
  try {
    const data = yield call(upload, action);
    window.location.href = `projects/${data.project_id}`;
  } catch (e) {}
}

function upload(action) {
  const formData = new FormData();
  formData.append("project_id", action.projectId);
  formData.append("project_picture", action.file);
  return new Promise((resolve, reject) => {
    baseService("POST", "/upload/project_picture", formData)
      .then(res => {
        resolve(res.data);
      })
      .catch(err => {
        reject(err.message);
      });
  });
}
