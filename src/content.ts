import { ACTION_GET_SETTINGS } from '@/constants/chrome-api';
import { setupImageTagMap } from '@/content-scripts/setupTagImageMap';
import { copyTag } from '@/content-scripts/copyTag';
import { setupNotification } from './content-scripts/setupNotification';

// ページ読み込み時に設定を取得する
chrome.runtime.sendMessage({ action: ACTION_GET_SETTINGS }, (response) => {
    if (!response || !response.settings) {
        return;
    }

    // const extensionSettings = response.settings as ExtensionSettings;

    setupNotification();

    const imageTagMap = setupImageTagMap();

    copyTag(imageTagMap);
});
