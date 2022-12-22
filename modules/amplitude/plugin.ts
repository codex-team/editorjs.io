import {track} from '@amplitude/analytics-browser';
import AnalyticEvent from "~/utils/analytics";

export default defineNuxtPlugin(() => {
  return {
    provide: {
      track: (event: AnalyticEvent) => {
        track(event);
      }
    }
  }
})
