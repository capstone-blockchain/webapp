import {
  SET_CURRENT_DISPLAY_UPDATE,
  RESET_UPDATE_REDUCER_STATE,
  REMOVE_UPDATE_IMAGE_ATTACHMENT,
  REMOVE_UPDATE_OTHER_ATTACHMENT,
  SET_CURRENT_UPDATE_ATTACHMENT
} from "../actions/types";
import {
  getLightBoxImagesFromFiles,
  getImageList,
  getOtherFiles
} from "../../shared/utils/helpers";
import { BASE_UPDATE_REDUCER_STATE } from "../../shared/utils/constants";

export default function projectReducer(
  state = BASE_UPDATE_REDUCER_STATE,
  action
) {
  switch (action.type) {
    case SET_CURRENT_DISPLAY_UPDATE:
      return Object.assign({}, state, {
        currentUpdate: action.update
      });

    case SET_CURRENT_UPDATE_ATTACHMENT:
      return Object.assign({}, state, {
        currentLightBoxImage: getLightBoxImagesFromFiles(action.attachments),
        imageFiles: getImageList(action.attachments),
        otherFiles: getOtherFiles(action.attachments)
      });

    case RESET_UPDATE_REDUCER_STATE:
      return Object.assign({}, state, BASE_UPDATE_REDUCER_STATE);

    case REMOVE_UPDATE_IMAGE_ATTACHMENT:
      const index = action.index;
      state.currentLightBoxImage.splice(index, 1);
      state.currentLightBoxTitle.splice(index, 1);
      state.imageFiles.splice(index, 1);
      return Object.assign({}, state, state);

    case REMOVE_UPDATE_OTHER_ATTACHMENT:
      state.otherFiles.splice(action.index, 1);
      return Object.assign({}, state, state);

    default:
      return state;
  }
}
