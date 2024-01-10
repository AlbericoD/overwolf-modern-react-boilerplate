import { AdsSlot, GetPremium } from "features/monetization";

//avoid the use of static text, use i18n instead, each language has its own text, and the text is stored in the
//locales folder in the project root

export const FreeContent = () => (
  <>
    <GetPremium />
    <AdsSlot width={400} height={300} />
  </>
);
