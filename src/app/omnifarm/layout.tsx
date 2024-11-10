import DefaultBox from "@/components/shared/DefaultBox";

function OmnifarmLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <DefaultBox>
      {children}
    </DefaultBox>
  );
}

export default OmnifarmLayout;
