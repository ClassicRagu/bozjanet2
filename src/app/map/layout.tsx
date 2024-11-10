import DefaultBox from "@/components/shared/DefaultBox";
import { Link } from "@mui/material";

function MapLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <DefaultBox>
      <p>
        Thank you to <Link href="https://xivapi.com/">XIVApi</Link> for
        providing the map and icons.
      </p>
      {children}
      <p>
        FINAL FANTASY XIV © 2010 - 2024 SQUARE ENIX CO., LTD. FINAL FANTASY,
        FINAL FANTASY XIV, and FFXIV are registered trademarks or trademarks of
        Square Enix Holdings Co., Ltd. All material used under license.
      </p>
    </DefaultBox>
  );
}

export default MapLayout;
