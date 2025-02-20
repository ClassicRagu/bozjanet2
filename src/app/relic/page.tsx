import RelicTracker from "@/components/relic/RelicTracker";
import RelicToggle from "@/components/relic/RelicToggle";

function Relic() {
  return (
    <>
      <RelicToggle mode={"tracker"} />
      <RelicTracker />
    </>
  );
}

export default Relic;
