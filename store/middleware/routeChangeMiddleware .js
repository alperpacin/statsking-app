import {
  updateGameValue,
  updateRegionValue,
} from "@/store/slices/searchBarSlice";
import {
  PLATFORM_LIST_LOL,
  PLATFORM_LIST_VAL,
} from "@/public/json/platform-api-routes.js";
import GAME_LIST from "@/public/json/game-platforms";

const routeChangeMiddleware = (store) => (next) => (action) => {
  if (action.type === "ROUTE_CHANGED") {
    const pathname = action.payload;

    if (pathname.includes("/valorant")) {
      store.dispatch(updateRegionValue(PLATFORM_LIST_VAL[0]));
      store.dispatch(updateGameValue(GAME_LIST[1]));
    } else {
      store.dispatch(updateRegionValue(PLATFORM_LIST_LOL[0]));
      store.dispatch(updateGameValue(GAME_LIST[0]));
    }
  }

  return next(action);
};

export default routeChangeMiddleware;
