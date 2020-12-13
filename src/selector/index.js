
import { createSelector } from "reselect";

const dataSelector = (space) => (space ? space.data : []);

export const dataList = createSelector([dataSelector], (data) => {
  return data
});

