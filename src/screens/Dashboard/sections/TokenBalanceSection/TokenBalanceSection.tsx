import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

const navigationItems = [
  {
    id: "dashboard",
    label: "Dashboard",
    icon: "/dashboard-square-02.svg",
    isActive: true,
  },
  {
    id: "insights",
    label: "Insights",
    icon: "/vuesax-outline-chart-square-1.png",
    isActive: false,
  },
  {
    id: "wallet",
    label: "Wallet",
    icon: "/wallet.svg",
    isActive: false,
  },
  {
    id: "subscription",
    label: "Subscription",
    icon: "/vuesax-linear-crown.svg",
    isActive: false,
  },
  {
    id: "settings",
    label: "Settings",
    icon: "/setting.svg",
    isActive: false,
  },
];

export const TokenBalanceSection = (): JSX.Element => {
  return (
    <Card className="w-full h-full flex flex-col bg-white rounded-3xl overflow-hidden shadow-[2px_6px_17.2px_#00000012]">
      <CardContent className="flex flex-col h-full p-0">
        <header className="flex items-center gap-[4.82px] ml-9 mt-[30px] w-[230.82px] h-[45px]">
          <img
            className="w-[45px] h-[44.13px]"
            alt="Untitled design"
            src="/untitled-design--98--1-1.png"
          />
          <div className="mt-[-1.61px] [font-family:'Playfair_Display',Helvetica] font-normal text-transparent text-[33.8px] text-center leading-[33.8px]">
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

        <nav className="flex flex-col items-start gap-[30px] h-[364px] w-[264px] self-center mt-[81px]">
          {navigationItems.map((item) => (
            <Button
              key={item.id}
              variant="ghost"
              className={`flex items-center gap-2 p-3 w-full h-auto justify-start rounded-xl ${
                item.isActive
                  ? "bg-green text-white"
                  : "bg-transparent text-gray-600 hover:bg-gray-50"
              }`}
            >
              <img
                className={`w-6 h-6 ${item.id === "dashboard" ? "w-7 h-7" : ""}`}
                alt={item.label}
                src={item.icon}
              />
              <span className="font-paragraph-medium-medium text-[length:var(--paragraph-medium-medium-font-size)] tracking-[var(--paragraph-medium-medium-letter-spacing)] font-[number:var(--paragraph-medium-medium-font-weight)] leading-[var(--paragraph-medium-medium-line-height)] [font-style:var(--paragraph-medium-medium-font-style)]">
                {item.label}
              </span>
            </Button>
          ))}
        </nav>

        <footer className="flex flex-col ml-[45px] w-[170px] h-[66px] mt-[351px]">
          <div className="ml-[51px] w-[90px] h-6 [font-family:'Poppins',Helvetica] font-medium text-[#011130] text-base tracking-[-0.48px] leading-[normal]">
            Powered by
          </div>
          <img
            className="-ml-0.5 h-[42px] w-[168px] self-center"
            alt="Untitled design"
            src="/untitled-design---2025-09-26t161508-596-1-1.png"
          />
        </footer>
      </CardContent>
    </Card>
  );
};
