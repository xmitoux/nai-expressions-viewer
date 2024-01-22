import { getAllImageElements } from '@/utils/dom-control';

export const copyTag = (imageTagMap: ImageTagMap) => {
    const images = getAllImageElements();

    const onImageClick = async (event: MouseEvent) => {
        const image = event.target as HTMLImageElement;
        const imageUrl = image.src;
        const imageTag = imageTagMap.get(imageUrl);

        if (!imageTag) {
            throw new Error('ImageTagMapに画像が存在しません。');
        }

        try {
            await navigator.clipboard.writeText(imageTag);
        } catch {
            throw new Error('クリップボードのコピー処理に失敗しました。');
        }
    };

    images.forEach((image) => {
        image.addEventListener('click', onImageClick);
    });
};
