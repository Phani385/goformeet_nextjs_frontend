import EarnWithGoformeet from "@/components/shared/EarnWithGoformeet";
import Footer from "@/components/shared/Footer";
import LandingProfiles from "@/components/shared/LandingProfiles";
import WhyChooseGoformeet from "@/components/shared/WhyChooseGoformeet";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <main className="hero-bg">
        <div className="flex-1">
          <h1 className="text-5xl xl:text-6xl min-[1440px]:text-7xl min-[1440px]:leading-[84px] line font-bold mb-4">
            Guaranteed Meetings with{" "}
            <span className="text-[#E03401]">Industry Experts</span>
          </h1>
          <p className="text-lg font-semibold w-[70%] xl:text-xl min-[1440px]:text-2xl min-[1440px]:w-full">
            Book and secure your meetings with top professionals effortlessly.
          </p>
          <div className="flex gap-4 my-4">
            <Button
              variant="outline"
              style={{
                borderWidth: 2,
                borderStyle: "solid",
                borderImage:
                  "linear-gradient(to bottom, red, rgba(0, 0, 0, 0)) 1 100%",
                borderImageSlice: "50px 50px 50px 50px",
              }}
            >
              Start My Page
              <Image
                alt="Right Arrow"
                src="/assets/icons/rightArrow.svg"
                width={16}
                height={16}
              />
            </Button>

            <Button className="secondary-button gap-2 items-center">
              Book Meeting
              <Image
                alt="Right Arrow"
                src="/assets/icons/rightArrow.svg"
                width={16}
                height={16}
              />
            </Button>
          </div>
        </div>
        <div className="flex-1 flex justify-end">
          <Image
            src="/assets/images/hero.png"
            width={400}
            height={400}
            alt="Hero Image"
            className="xl:w-[80%]"
          />
        </div>
      </main>
      <LandingProfiles />
      <WhyChooseGoformeet />
    </>
  );
}
