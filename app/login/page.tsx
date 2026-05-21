import LoginForm from "@/components/shadcn-space/blocks/login-01/login";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Login | Nova Store",
    description: "Login to your Nova Store account to manage your orders and profile.",
};

export default function LoginPage() {
    return <LoginForm />;
}
