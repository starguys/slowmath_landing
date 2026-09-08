// Twitter/X 카드도 동일 이미지를 쓰도록 opengraph-image 를 그대로 재사용.
// (dynamic/alt/size/contentType 은 route별 top-level export 라 재선언이 필요.)
export { default } from "./opengraph-image";
export const alt = "LittleSteps — 雖然慢，但方向是對的";
export const size = { width: 878, height: 443 };
export const contentType = "image/png";
export const dynamic = "force-static";
