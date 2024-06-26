import EarnWithGoformeet from "@/components/shared/EarnWithGoformeet";
import Footer from "@/components/shared/Footer";
import LandingProfiles from "@/components/shared/LandingProfiles";
import WhyChooseGoformeet from "@/components/shared/WhyChooseGoformeet";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import type { Metadata } from "next";
import DownloadAppModal from "@/components/shared/DownloadAppModal";
import FAQSection from "@/components/shared/FAQSection";
import UserReviews from "@/components/shared/UserReviews";
import ArchitecturalJourney from "@/components/shared/ArchitecturalJourney";

export const metadata: Metadata = {
  title:
    "Goformeet | Meet, Earn, Connect | Unlock endless solutions with just one app",
  description:
    "Goformeet your go-to app for hassle-free meetings. Book people of your choice vibe and embrace your connection with them",
  keywords:
    "goformeet, GoForMeet, go for meet, Go For Meet, Go4meet, meeting aap, Professional, Meeting, face to face timing, Earn money, Make money online, Looking for New opportunity, freelance, jobs, doctor freelance, model, freelance jobs for models, freelance jobs for trainers, freelance jobs for travel assistance, freelance jobs for personal assistance, freelance jobs for life coach, freelance jobs for companion, freelance jobs for actor, freelance jobs for students, freelance jobs for , freelance jobs for air hostes, freelance jobs for Atrologer, freelance jobs for artist, freelance jobs for fashion designer, freelance jobs for nurse, freelance jobs for recruiter, freelance jobs for fitness trainer, freelance jobs for analyst, freelance jobs for lawyer, freelance jobs for musician, freelance jobs photographer, Go for meet, Gofor meet, go formeet, go4meet, go 4 meet,go4 meet,go 4meet",
};

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
            <DownloadAppModal>
              <div className="border-gradient mb-5">
                <Button variant="outline" className="flex gap-1">
                  Start My Page
                  <Image
                    alt="Right Arrow"
                    className="mt-1"
                    src="/assets/icons/rightArrow.svg"
                    width={16}
                    height={16}
                  />
                </Button>
              </div>
            </DownloadAppModal>
            <DownloadAppModal>
              <Button className="sign-in-button gap-1 items-center justify-center">
                Book Meeting
                <Image
                  alt="Right Arrow"
                  src="/assets/icons/arrowRight.svg"
                  className="mt-1"
                  width={12}
                  height={12}
                />
              </Button>
            </DownloadAppModal>
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
      <div className="my-28 custom-container">
        <h2 className="text-3xl lg:text-4xl xl:text-5xl text-center mb-8 font-bold">
          We have been <span className="text-[#E03300]">Featured on</span>
        </h2>
        <div className="flex justify-around flex-wrap">
          <Image src="/assets/images/dailyhunt.png" width={200} height={200} alt="Dailyhunt" />
          <Image src="/assets/images/medium.png" width={200} height={200} alt="Dailyhunt" />
          <Image src="/assets/images/gnews.png" width={200} height={200} alt="Dailyhunt" />
          <Image src="/assets/images/quara.png" width={200} height={200} alt="Dailyhunt" />
        </div>
      </div>
      <EarnWithGoformeet />
      <WhyChooseGoformeet />
      <ArchitecturalJourney />
      <UserReviews />
      <FAQSection />
    </>
  );
}
