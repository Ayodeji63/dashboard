import React from "react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../../../components/ui/avatar";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const DashboardHeaderSection = (): JSX.Element => {
  const navigationItems = [
    {
      icon: "/dashboard-square-02.svg",
      label: "Dashboard",
      isActive: true,
    },
    {
      icon: "/vuesax-outline-chart-square.png",
      label: "Insights",
      isActive: false,
    },
    {
      icon: "/wallet.svg",
      label: "Wallet",
      isActive: false,
    },
    {
      icon: "/vuesax-linear-crown.svg",
      label: "Subscription",
      isActive: false,
    },
    {
      icon: "/setting.svg",
      label: "Settings",
      isActive: false,
    },
  ];

  return (
    <Card className="w-full max-w-[336px] h-[984px] flex flex-col bg-white rounded-3xl overflow-hidden shadow-[2px_6px_17.2px_#00000012]">
      <CardContent className="flex flex-col h-full p-0">
        <header className="flex ml-9 w-[230.82px] h-[45px] mt-[30px] items-center gap-[4.82px]">
          <img
            className="w-[45px] h-[44.13px]"
            alt="Untitled design"
            src="/untitled-design--98--1.png"
          />

          <div className="mt-[-1.61px] [font-family:'Playfair_Display',Helvetica] font-normal text-transparent text-[33.8px] text-center leading-[33.8px] w-fit">
            <span className="font-semibold text-[#000000] tracking-[-0.57px] leading-[45px]">
              Poultry
            </span>

            <span className="font-semibold text-[#000000] tracking-[0] leading-[0.1px]">
              &nbsp;
            </span>

            <span className="italic text-[#000000] tracking-[-0.46px] leading-[45px]">
              Pulse
            </span>
          </div>
        </header>

        <nav className="flex h-[364px] w-[264px] self-center mt-[81px] flex-col items-start gap-[30px]">
          {navigationItems.map((item, index) => (
            <Button
              key={index}
              variant={item.isActive ? "default" : "ghost"}
              className={`flex items-center gap-2 p-3 self-stretch w-full h-auto rounded-xl ${
                item.isActive
                  ? "bg-green text-white"
                  : "bg-transparent text-gray-600 hover:bg-gray-50"
              }`}
            >
              <img
                className={`w-${item.label === "Dashboard" ? "7" : "6"} h-${item.label === "Dashboard" ? "7" : "6"}`}
                alt={item.label}
                src={item.icon}
              />

              <span className="font-paragraph-medium-medium font-[number:var(--paragraph-medium-medium-font-weight)] text-[length:var(--paragraph-medium-medium-font-size)] tracking-[var(--paragraph-medium-medium-letter-spacing)] leading-[var(--paragraph-medium-medium-line-height)] [font-style:var(--paragraph-medium-medium-font-style)]">
                {item.label}
              </span>
            </Button>
          ))}
        </nav>

        <div className="ml-[61px] w-[257px] h-48 mt-[54px] [font-family:'Poppins',Helvetica] font-medium text-[#102311] text-base text-center tracking-[-0.48px] leading-[normal]">
          BlockDAG, inspired by Bitcoin, is the world&apos;s most advanced layer
          1 blockchain. A cutting-edge Proof-of-Work (PoW) algorithm that
          delivers industry-leading speeds, unbeatable security, and high
          decentralization.
        </div>

        <div className="ml-28 w-[90px] h-6 mt-[17px] [font-family:'Poppins',Helvetica] font-medium text-[#102311] text-base tracking-[-0.48px] leading-[normal]">
          Powered by
        </div>

        <img
          className="ml-[-46px] h-[42px] w-[168px] self-center"
          alt="Untitled design"
          src="/untitled-design---2025-09-26t161508-596-1.png"
        />

        <div className="flex ml-9 w-[166px] h-[50px] mt-12 items-center gap-3">
          <Avatar className="w-[50px] h-[50px] border-2 border-solid border-[#7dcf81]">
            <AvatarImage
              src="/ellipse-75-1.png"
              alt="John Ayodeji"
              className="object-cover"
            />
            <AvatarFallback>JA</AvatarFallback>
          </Avatar>

          <div className="flex flex-col w-[104px] items-start">
            <div className="self-stretch mt-[-1.00px] font-paragraph-medium-medium font-[number:var(--paragraph-medium-medium-font-weight)] text-[#000000] text-[length:var(--paragraph-medium-medium-font-size)] tracking-[var(--paragraph-medium-medium-letter-spacing)] leading-[var(--paragraph-medium-medium-line-height)] [font-style:var(--paragraph-medium-medium-font-style)]">
              John Ayodeji
            </div>

            <div className="self-stretch font-paragraph-xsmall-regular font-[number:var(--paragraph-xsmall-regular-font-weight)] text-neutral-500 text-[length:var(--paragraph-xsmall-regular-font-size)] tracking-[var(--paragraph-xsmall-regular-letter-spacing)] leading-[var(--paragraph-xsmall-regular-line-height)] [font-style:var(--paragraph-xsmall-regular-font-style)]">
              Farmer
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
