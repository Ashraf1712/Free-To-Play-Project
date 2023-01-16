import React, { useEffect } from "react";

function MyAds() {
  useEffect(() => {
    window.adsbygoogle = window.adsbygoogle || [];
    window.adsbygoogle.push({});
    console.log("Yes");
  });

  return (
    <div>
      <ins
        className="block border-2 w-72 h-72"
        data-ad-client="ca-pub-4737266900103849"
        data-ad-slot="3519284472"
        data-ad-format="auto"
        data-adtest="on"
        data-full-width-responsive="true"
      />
    </div>
  );
}
export default MyAds;
