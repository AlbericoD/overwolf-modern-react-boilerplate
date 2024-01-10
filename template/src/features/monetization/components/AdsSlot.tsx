import { useOverwolfAds, type UseOverwolfAds } from "../hooks/useOverwolfAds";
import "./styles/AdsSlot.css";

/**
 * Renders an ads slot component.
 * @see https://overwolf.github.io/start/monetize-your-app/advertising/working-with-ads#list-of-ad-sizes
 * A simple, one Container layout
 * Dimensions: 400x300
 * Revenue: Baseline
 * Show Video Ads: Yes
 * Design Constraints: Minimal
 * User Friction: Minimal
 * Policies:
 * As such, you must also keep in mind the following:
 * Do not create Ad experiences that are actively intrusive/clash with the app's basic usage.
 * No more than one video Ad container may be placed on a single page at any moment.
 * Any manipulation of or interference with the ads integration is not allowed - Bots, auto clickers, constant page reloading, faking impressions, etc.
 * Ads may not be placed on dead end/empty screens. This includes: "Thank You" pages, "Login" pages, "Dialogue/Error/Notification", pages Etc
 * @test How to test: https://overwolf.github.io/start/test-your-app/how-to-test-your-app#testing-ad-visibility
 * @returns The rendered ads slot component.
 */
export function AdsSlot(size: UseOverwolfAds) {
  const { containerRef, isPlaying } = useOverwolfAds(size);
  return (
    <div
      className='ads-slot'
      ref={containerRef}
      style={{
        minWidth: size.width,
        minHeight: size.height,
        maxWidth: size.width,
        maxHeight: size.height,
      }}
    >
      {isPlaying ? null : (
        <>
          <div className='ads-slot__placeholder' />
          <h1>Ads Slot 400x300</h1>
        </>
      )}
    </div>
  );
}
