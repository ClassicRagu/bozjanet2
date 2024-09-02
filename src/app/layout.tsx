import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Box, Button, Grid2 } from "@mui/material";
import "./globals.css";

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
                maxWidth: "1000px",
                marginBottom: "5px",
                alignItems: "top",
                justifyContent: "center",
                width: "100%",
              }}
            >
              <Grid2
                style={{
                  display: "flex",
                  alignContent: "center",
                  justifyContent: "center",
                  maxHeight: "50px",
                  minWidth: "250px",
                }}
              >
                <Button
                  size="large"
                  style={{ minWidth: "250px" }}
                  variant={"contained"}
                  href="/faq"
                >
                  FAQ
                </Button>
              </Grid2>
              <Grid2
                style={{
                  display: "flex",
                  alignContent: "center",
                  justifyContent: "center",
                  maxHeight: "50px",
                  minWidth: "250px",
                }}
              >
                <Button
                  size="large"
                  variant={"contained"}
                  style={{ minWidth: "250px" }}
                  href="/"
                >
                  I&apos;m here for Guides
                </Button>
              </Grid2>
              <Grid2
                style={{
                  display: "flex",
                  alignContent: "center",
                  justifyContent: "center",
                  maxHeight: "50px",
                  minWidth: "250px",
                }}
              >
                <Button
                  size="large"
                  variant={"contained"}
                  style={{ minWidth: "250px" }}
                  href="/map"
                >
                  Fragment Map
                </Button>
              </Grid2>
            </Grid2>
          </Box>
        </div>
        {children}
      </body>
    </html>
  );
}
