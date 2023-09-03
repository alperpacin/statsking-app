import GenericLayout from "@/layout/generic-layout";
import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <GenericLayout
      className={`flex min-h-screen flex-col items-center justify-center p-24`}
    >
      <SignIn />
    </GenericLayout>
  );
}
