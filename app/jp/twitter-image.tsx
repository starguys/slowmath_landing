// Twitter/X 카드도 동일 이미지를 쓰도록 opengraph-image 를 그대로 재사용.
// (dynamic/alt/size/contentType 은 route별 top-level export 라 재선언이 필요.)
export { default } from "./opengraph-image";
export const alt = "LittleSteps — 正しい方向へ、一歩ずつ";
export const size = { width: 878, height: 443 };
export const contentType = "image/png";
export const dynamic = "force-static";
