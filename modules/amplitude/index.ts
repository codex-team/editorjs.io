import {init} from '@amplitude/analytics-browser';
import { addPlugin} from '@nuxt/kit'
import * as path from "path";

export default async function Amplitude() {

  const API_TOKEN = process.env.AMPLITUDE_TOKEN;

  if (API_TOKEN) {
    await init(API_TOKEN);
  } else {
    console.log('AMPLITUDE_TOKEN is empty')
  }

  addPlugin(path.resolve(__dirname, 'plugin.ts'))
};
