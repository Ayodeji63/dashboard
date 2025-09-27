import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Card, CardContent } from "../../../../components/ui/card";

const monitoringData = [
  {
    title: "Poultry Temperature",
    icon: "/oui-temperature.svg",
    value: "29°C",
    status: "Warning",
    range: "18-30",
    source: "Batch A",
    chartImages: ["/ellipse-77.svg", "/ellipse-78.svg", "/ellipse-79.svg"],
  },
  {
    title: "Poultry Humidity",
    icon: "/lets-icons-humidity.svg",
    value: null,
    status: "Warning",
    range: "18-30",
    source: "Batch A",
    chartImage: "/group-127.png",
  },
];

export const LiveFeedSection = (): JSX.Element => {
  return (
    <section className="w-full flex items-center gap-[15px] bg-white rounded-3xl overflow-hidden shadow-[0px_0px_16.5px_1px_#00000003] p-[15px]">
      {monitoringData.map((item, index) => (
        <Card
          key={index}
          className="h-[237px] w-[500px] bg-[#e0f8e1] rounded-3xl overflow-hidden border-0 shadow-none"
        >
          <CardContent className="p-0 h-full relative">
            {index === 0 ? (
              <div className="flex items-center gap-[65px] h-[201px] w-[413px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="flex flex-col w-52 items-start gap-3">
                  <div className="flex items-center gap-[5px] w-full">
                    <h3 className="font-heading-h5-medium font-[number:var(--heading-h5-medium-font-weight)] text-green-900 text-[length:var(--heading-h5-medium-font-size)] tracking-[var(--heading-h5-medium-letter-spacing)] leading-[var(--heading-h5-medium-line-height)] whitespace-nowrap [font-style:var(--heading-h5-medium-font-style)]">
                      {item.title}
                    </h3>
                    <img
                      className="w-6 h-6"
                      alt="Temperature icon"
                      src={item.icon}
                    />
                  </div>

                  <div className="flex flex-col w-[165px] h-[165px] items-start gap-2.5 px-[53px] py-[66px] relative">
                    <div className="flex flex-col w-[165px] items-start absolute top-0 left-0">
                      <img
                        className="self-stretch w-full h-[165px]"
                        alt="Chart background"
                        src={item.chartImages[0]}
                      />
                      <img
                        className="self-stretch w-full h-[138.01px] mt-[-213px]"
                        alt="Chart progress"
                        src={item.chartImages[1]}
                      />
                      <img
                        className="self-stretch w-full h-[27.63px] mt-[-213px]"
                        alt="Chart indicator"
                        src={item.chartImages[2]}
                      />
                    </div>
                    <div className="w-fit mt-[-1.00px] [font-family:'Gilroy-Medium-Medium',Helvetica] font-medium text-black text-[27.3px] tracking-[-0.55px] leading-[normal]">
                      {item.value}
                    </div>
                  </div>
                </div>

                <div className="flex flex-col w-[140px] items-start gap-[22px]">
                  <Badge
                    variant="outline"
                    className="inline-flex items-center justify-center gap-2.5 px-[21px] py-2.5 rounded-[20px] border-b border-[#7dcf81] bg-transparent"
                  >
                    <span className="font-paragraph-xsmall-regular font-[number:var(--paragraph-xsmall-regular-font-weight)] text-[#2e7d32] text-[length:var(--paragraph-xsmall-regular-font-size)] tracking-[var(--paragraph-xsmall-regular-letter-spacing)] leading-[var(--paragraph-xsmall-regular-line-height)] [font-style:var(--paragraph-xsmall-regular-font-style)]">
                      Quick Analysis
                    </span>
                  </Badge>

                  <div className="flex flex-col items-start gap-[29px] w-full">
                    <div className="flex items-end gap-[3px] w-full">
                      <span className="[font-family:'Poppins',Helvetica] font-normal text-black text-sm tracking-[0] leading-[14px]">
                        Status:{" "}
                        <span className="font-semibold text-[#ffa500]">
                          {item.status}
                        </span>
                      </span>
                      <img
                        className="w-6 h-6"
                        alt="Warning icon"
                        src="/typcn-warning.svg"
                      />
                    </div>

                    <div className="[font-family:'Poppins',Helvetica] font-normal text-black text-sm tracking-[0] leading-[14px]">
                      <span className="[font-family:'Poppins',Helvetica] font-normal text-black text-sm tracking-[0]">
                        Range:{" "}
                      </span>
                      <span className="font-semibold">{item.range}</span>
                    </div>

                    <div className="[font-family:'Poppins',Helvetica] font-normal text-black text-sm tracking-[0] leading-[14px]">
                      <span className="[font-family:'Poppins',Helvetica] font-normal text-black text-sm tracking-[0]">
                        Source:{" "}
                      </span>
                      <span className="font-semibold">{item.source}</span>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <>
                <div className="inline-flex items-start gap-2 absolute top-[26px] left-7">
                  <h3 className="font-heading-h5-medium font-[number:var(--heading-h5-medium-font-weight)] text-green-900 text-[length:var(--heading-h5-medium-font-size)] tracking-[var(--heading-h5-medium-letter-spacing)] leading-[var(--heading-h5-medium-line-height)] whitespace-nowrap [font-style:var(--heading-h5-medium-font-style)]">
                    {item.title}
                  </h3>
                  <img
                    className="w-[22px] h-[22px]"
                    alt="Humidity icon"
                    src={item.icon}
                  />
                </div>

                <div className="flex flex-col w-[140px] items-start gap-[22px] absolute top-[calc(50.00%_-_102px)] left-[294px]">
                  <Badge
                    variant="outline"
                    className="inline-flex items-center justify-center gap-2.5 px-[21px] py-2.5 rounded-[20px] border-b border-[#7dcf81] bg-transparent"
                  >
                    <span className="font-paragraph-xsmall-regular font-[number:var(--paragraph-xsmall-regular-font-weight)] text-[#2e7d32] text-[length:var(--paragraph-xsmall-regular-font-size)] tracking-[var(--paragraph-xsmall-regular-letter-spacing)] leading-[var(--paragraph-xsmall-regular-line-height)] [font-style:var(--paragraph-xsmall-regular-font-style)]">
                      Quick Analysis
                    </span>
                  </Badge>

                  <div className="flex flex-col items-start gap-[29px] w-full">
                    <div className="flex items-end gap-[3px] w-full">
                      <span className="[font-family:'Poppins',Helvetica] font-normal text-black text-sm tracking-[0] leading-[14px]">
                        Status:{" "}
                        <span className="font-semibold text-[#ffa500]">
                          {item.status}
                        </span>
                      </span>
                      <img
                        className="w-6 h-6"
                        alt="Warning icon"
                        src="/typcn-warning.svg"
                      />
                    </div>

                    <div className="[font-family:'Poppins',Helvetica] font-normal text-black text-sm tracking-[0] leading-[14px]">
                      <span className="[font-family:'Poppins',Helvetica] font-normal text-black text-sm tracking-[0]">
                        Range:{" "}
                      </span>
                      <span className="font-semibold">{item.range}</span>
                    </div>

                    <div className="[font-family:'Poppins',Helvetica] font-normal text-black text-sm tracking-[0] leading-[14px]">
                      <span className="[font-family:'Poppins',Helvetica] font-normal text-black text-sm tracking-[0]">
                        Source:{" "}
                      </span>
                      <span className="font-semibold">{item.source}</span>
                    </div>
                  </div>
                </div>

                <img
                  className="absolute top-[108px] left-0 w-[233px] h-[93px]"
                  alt="Humidity chart"
                  src={item.chartImage}
                />
              </>
            )}
          </CardContent>
        </Card>
      ))}
    </section>
  );
};
