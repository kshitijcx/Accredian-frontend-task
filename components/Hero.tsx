import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { ReferForm } from "./ReferForm";

const Hero = () => {
  return (
    <>
      <Card className="shadow-lg">
        <CardContent className="pb-0 max-md:h-[500px] max-md:w-[300px]">
          <div className="flex h-full gap-10 max-md:justify-center max-md:items-center  max-md:flex-col">
            <div className="flex flex-col justify-center gap-3">
              <p className="font-bold text-2xl leading-8">
                Let’s Learn
                <span className="block">& Earn</span>
              </p>
              <p>
                Get a chance to win
                <span className="block">
                  up-to{" "}
                  <span className="text-[#1A73E8] text-xl font-bold">Rs. 15,000</span>
                </span>
              </p>
              <ReferForm/>
            </div>
            <div className="relative">
              <Image
                src="/bill1.png"
                className="w-[90px] absolute bottom-0 left-0"
                width="500"
                height="500"
                alt="main"
              />
              <Image
                src="/bill2.png"
                className="w-[80px] absolute right-0"
                width="500"
                height="500"
                alt="main"
              />
              <Image
                src="/main.png"
                className="w-[400px]"
                width="300"
                height="200"
                alt="main"
              />
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  );
};
export default Hero;
