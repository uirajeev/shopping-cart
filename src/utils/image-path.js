const imgPaths = require.context("@/assets/images", true);

export const _imgPath = file => imgPaths(`./${file}`, true);
