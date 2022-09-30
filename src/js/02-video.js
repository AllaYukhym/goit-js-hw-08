import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
import { save, load } from './storage';

const LOCALE_STORAGE_KEY = 'videoplayer-current-time';
const iframe = document.querySelector('iframe');
const player = new Player(iframe);

initPage();

const throttledOnFormInput = throttle(saveCurrentData, 1000);
player.on('timeupdate', throttledOnFormInput);

function saveCurrentData(data) {
  console.log(data.seconds);
  save(LOCALE_STORAGE_KEY, data.seconds);
}

function initPage() {
  const saveData = load(LOCALE_STORAGE_KEY);
  if (!saveData) {
    return;
  }
  player.setCurrentTime(load(LOCALE_STORAGE_KEY));
}
