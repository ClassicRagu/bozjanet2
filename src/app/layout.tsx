import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Box, Button, Grid2 } from "@mui/material";
import NextLink from "next/link";
import "./globals.css";

const routes = [
  { name: "FAQ", route: "/faq" },
  { name: "I'm Here For Guides", route: "/" },
  { name: "Fragment Map", route: "/map" },
  { name: "Omnifarm (Temp)", route: "/omnifarm" },
];

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bozja Guides",
  description: "A website that links guides for FFXIV Save the Queen Content ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div>
          <h1 style={{ textAlign: "center" }}>Bozja Guides</h1>
          <Box
            style={{
              display: "flex",
              alignContent: "center",
              justifyContent: "center",
            }}
          >
            <Grid2
              container
              spacing={2}
              style={{
                minHeight: "75px",
                maxWidth: "1250px",
                marginBottom: "5px",
                alignItems: "top",
                justifyContent: "center",
                width: "100%",
              }}
            >
              {routes.map((route,index) => (
                <Grid2
                  key={`${route.name}-${index}`}
                  style={{
                    display: "flex",
                    alignContent: "center",
                    justifyContent: "center",
                    maxHeight: "50px",
                    minWidth: "250px",
                  }}
                >
                  <Button
                    component={NextLink}
                    size="large"
                    style={{ minWidth: "250px" }}
                    variant={"contained"}
                    href={route.route}
                  >
                    {route.name}
                  </Button>
                </Grid2>
              ))}
            </Grid2>
          </Box>
        </div>
        {children}
      </body>
    </html>
  );
}
