import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Box, Button, CssBaseline, Grid2 } from "@mui/material";
import NextLink from "next/link";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../theme";

const routes = [
  { name: "FAQ", route: "/faq" },
  { name: "I'm Here For Guides", route: "/" },
  { name: "Fragment Map", route: "/map" },
  { name: "Relic Weapons", route: "/relic" },
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
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
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
                  {routes.map((route, index) => (
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
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
