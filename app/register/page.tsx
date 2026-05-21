import RegisterForm from "@/components/shadcn-space/blocks/register-01/register";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Register | Nova Store",
    description: "Create a Nova Store account to start shopping premium collections.",
};

export default function RegisterPage() {
    return <RegisterForm />;
}
