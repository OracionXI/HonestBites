"use client";

import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import { SignInButton } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useEffect, useState } from "react";

const features = [
  "Food review hub",
  "Cuisine and tag-based filters",
  "Recommanded picks of the week",
  "Reviewer profiles and stats",
];

export default function Landing() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background/95 flex justify-center px-4">
      <div className="w-full max-w-[1440px]">
        <div
          className={`container ${isMobile ? "pt-20 pb-10" : "pt-32 pb-20"}`}
        >
          <div className="max-w-[800px] mx-auto text-center space-y-8 mb-20">
            <div className="space-y-6">
              <h1
                className={`font-bold tracking-tight ${
                  isMobile ? "text-3xl" : "text-5xl"
                } sm:text-5xl lg:text-6xl`}
              >
                HonestBites.
                <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
                  Clean Reviews for Every Bite
                </span>
              </h1>

              <p
                className={`text-muted-foreground mx-auto ${
                  isMobile ? "text-base max-w-[90%]" : "text-xl max-w-[600px]"
                }`}
              >
                A Food Critique and Review hub, offering a clean and authentic
                platform for discovering, reviewing, and sharing real food
                experiences.
              </p>
            </div>

            <div
              className={`gap-4 justify-center ${
                isMobile ? "flex flex-col" : "flex flex-row"
              }`}
            >
              <Button size="lg" asChild>
                <Link href="/dashboard" className="gap-2">
                  Already Hungry <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <SignInButton
                mode="modal"
                appearance={{
                  baseTheme: resolvedTheme === "dark" ? dark : undefined,
                }}
                fallbackRedirectUrl="/dashboard"
              >
                <Button size="lg" variant="outline">
                  Sign in
                </Button>
              </SignInButton>
            </div>

            <div
              className={`grid gap-4 pt-4 mx-auto  ${
                isMobile
                  ? "grid-cols-1 max-w-full"
                  : "sm:grid-cols-2 max-w-[600px]"
              }`}
            >
              {features.map((feature) => (
                <div key={feature} className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span className="text-muted-foreground text-sm">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {mounted && (
            <div className="relative w-full mx-auto mt-10 sm:mt-20">
              <div className="relative bg-background/95 backdrop-blur rounded-lg shadow-2xl overflow-hidden">
                {/* <Image
                  src={
                    resolvedTheme === "dark"
                      ? "/dashboard-dark.PNG"
                      : "/dashboard-light.PNG"
                  }
                  alt="App preview"
                  width={1824}
                  height={1080}
                  className={`rounded-lg w-full ${isMobile ? "h-auto" : ""}`}
                  priority
                /> */}
                <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-background" />
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="fixed inset-0 -z-10 h-full w-full bg-background">
        <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-primary/5 to-background"></div>
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="h-[40rem] w-[40rem] rounded-full bg-primary/5 blur-3xl"></div>
        </div>
      </div>
    </div>
  );
}
