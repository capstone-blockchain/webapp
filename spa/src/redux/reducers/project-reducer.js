import {
  UPDATE_UPLOADED_PROJECT_ATTACHMENTS,
  REMOVE_UPLOADED_PROJECT_ATTACHMENT,
  UPDATE_PROJECT_UPDATE_TAGS,
  RESET_PROJECT_REDUCER_STATE
} from "../actions/types"
import { BASE_PROJECT_REDUCER_STATE } from "../../shared/utils/constants"

export default function projectReducer(
  state = BASE_PROJECT_REDUCER_STATE,
  action
) {
  switch (action.type) {
    case UPDATE_UPLOADED_PROJECT_ATTACHMENTS:
      return Object.assign({}, state, {
        files: state.files.concat(action.files)
      })

    case REMOVE_UPLOADED_PROJECT_ATTACHMENT:
      state.files.splice(action.index, 1)
      return Object.assign({}, state, {
        files: state.files
      })

    case UPDATE_PROJECT_UPDATE_TAGS:
      return Object.assign({}, state, {
        updateTagSuggestion: action.tags
      })

    case RESET_PROJECT_REDUCER_STATE:
      return Object.assign({}, state, BASE_PROJECT_REDUCER_STATE)

    default:
      return state
  }
}
