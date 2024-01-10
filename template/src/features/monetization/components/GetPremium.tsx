import { openSubscribeWindow } from "../hooks/useAdRemoval";
import "./styles/GetPremium.css";

export function GetPremium() {
  return (
    <div className='get-premium'>
      <button className='get-premium__button' onClick={openSubscribeWindow}>
        Get Premium: Remove Ads!
      </button>
    </div>
  );
}
