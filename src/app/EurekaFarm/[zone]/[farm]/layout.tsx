import DefaultBox from "@/components/shared/DefaultBox";
import { Box, Card } from "@mui/material";

export default function SuperMoistLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <DefaultBox>
      <h2 style={{ marginTop: "15px" }}>Box/Logos Windows</h2>
      <p>
        Please note that this page is still under development and will undergo
        drastic changes often.
      </p>
      {children}
    </DefaultBox>
  );
}
