import React from "react";
import { ActionButtonsSection } from "./sections/ActionButtonsSection/ActionButtonsSection";
import { DashboardHeaderSection } from "./sections/DashboardHeaderSection/DashboardHeaderSection";
import { LiveFeedSection } from "./sections/LiveFeedSection/LiveFeedSection";
import { PoultryMetricsSection } from "./sections/PoultryMetricsSection/PoultryMetricsSection";
import { PredictionsSection } from "./sections/PredictionsSection/PredictionsSection";
import { RecommendationsSection } from "./sections/RecommendationsSection/RecommendationsSection";
import { TokenBalanceSection } from "./sections/TokenBalanceSection/TokenBalanceSection";

export const Dashboard = (): JSX.Element => {
  return (
    <div className="bg-[#f2f2f2] w-full min-w-[1440px] min-h-[1024px] p-6">
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-3 flex flex-col">
          <DashboardHeaderSection />
          <TokenBalanceSection />
        </div>

        <div className="col-span-5 flex flex-col gap-6">
          <PoultryMetricsSection />
          <ActionButtonsSection />
        </div>

        <div className="col-span-4 flex flex-col gap-6">
          <PredictionsSection />
          <RecommendationsSection />
        </div>

        <div className="col-span-9 col-start-4">
          <LiveFeedSection />
        </div>
      </div>
    </div>
  );
};
