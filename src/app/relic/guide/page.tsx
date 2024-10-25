"use server";
import RelicGuide from "@/components/relic/RelicGuide";
import RelicToggle from "@/components/relic/RelicToggle";

function Relic() {
  
  return (
    <>
      <RelicToggle mode={"guide"} />
      <RelicGuide />
    </>
  );
}

export default Relic;
