import { GET_CHOSEN_ADMIN_PROJECT } from "./types";

export function getCurrentAdminProject(project) {
  return {
    type: GET_CHOSEN_ADMIN_PROJECT,
    project
  };
}
