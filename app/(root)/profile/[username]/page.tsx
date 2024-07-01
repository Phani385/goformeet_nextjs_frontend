import CarouselImage from "@/components/shared/CarouselImage";
import Loader from "@/components/shared/Loader";
import ProfileTextCard from "@/components/shared/ProfileTextCard";
import DownloadAppModal from "@/components/shared/DownloadAppModal";
import { Metadata, ResolvingMetadata } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

type Props = {
  params: { username: string };
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const username = params.username;

  try {
    const profileResponse = await fetch(
      `${process.env.BACKEND_URL}/get-profile/${username}`
    );
    if (!profileResponse.ok) {
      throw new Error("Network response was not ok");
    }
    const profile = await profileResponse.json();
    const profileData = profile.profile;

    console.log(
      `${process.env.FRONTEND_URL}/api/og?name=${encodeURIComponent(
        profileData.personalDetails.name.trim()
      )}&username=${username}`
    );

    return {
      title:
        "Goformeet | Meet, Earn, Connect | Unlock endless solutions with just one app",
      description:
        "Goformeet your go-to app for hassle-free meetings. Book people of your choice vibe and embrace your connection with them",
      keywords:
        "goformeet, GoForMeet, go for meet, Go For Meet, Go4meet, meeting aap, Professional, Meeting, face to face timing, Earn money, Make money online, Looking for New opportunity, freelance, jobs, doctor freelance, model, freelance jobs for models, freelance jobs for trainers, freelance jobs for travel assistance, freelance jobs for personal assistance, freelance jobs for life coach, freelance jobs for companion, freelance jobs for actor, freelance jobs for students, freelance jobs for , freelance jobs for air hostes, freelance jobs for Atrologer, freelance jobs for artist, freelance jobs for fashion designer, freelance jobs for nurse, freelance jobs for recruiter, freelance jobs for fitness trainer, freelance jobs for analyst, freelance jobs for lawyer, freelance jobs for musician, freelance jobs photographer, Go for meet, Gofor meet, go formeet, go4meet, go 4 meet,go4 meet,go 4meet",
      openGraph: {
        images: [
          {
            url: `${process.env.FRONTEND_URL}/api/og?name=${encodeURIComponent(
              profileData.personalDetails.name.trim()
            )}&username=${username}`,
            width: 1200,
            height: 630,
          },
        ],
      },
    };
  } catch (error) {
    console.error("Error fetching profile data:", error);
    return {
      title: "Error",
      description: "An error occurred while fetching the profile data.",
    };
  }
}

async function Profile({ params }: Props) {
  const username = params.username;

  async function getProfileData() {
    try {
      const response = await fetch(
        `${process.env.BACKEND_URL}/get-profile/${username}`,
        { cache: "no-cache" }
      );
      const data = await response.json();
      return data.profile;
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  const profileData = await getProfileData();

  if (!profileData) {
    return <Loader />;
  }

  return (
    <section>
      <div className="profile-top-container custom-container">
        <div>
          <CarouselImage images={profileData.personalDetails.profileImages} />
        </div>
        <div className="profile-top-right">
          <div>
            <h1 className="host-name">
              {profileData.personalDetails.name}{" "}
              <span className="host-username">
                @{profileData.personalDetails.userName}
              </span>
            </h1>
            <h2 className="host-profession">
              {profileData.personalDetails.profession}
            </h2>
            <p className="top-3-interests">
              {profileData.personalDetails.interests?.slice(0, 3).join(" | ")}
            </p>
          </div>
          <div>
            <div className="flex justify-end">
              <DownloadAppModal>
                <Button className="secondary-button gap-2 items-center">
                  Book Meeting{" "}
                  <Image
                    alt="Right Arrow"
                    src="/assets/icons/rightArrow.svg"
                    width={16}
                    height={16}
                  />
                </Button>
              </DownloadAppModal>
            </div>
            <h4 className="city-details">
              📍{profileData.personalDetails.city} - City in{" "}
              {profileData.personalDetails.state}
            </h4>
            <ul className="social-links-container">
              <li>
                <Link href="/">
                  <Image
                    src="/assets/icons/linkedin.svg"
                    width={20}
                    height={20}
                    alt="LinkedIn"
                  />
                </Link>
              </li>
              <li>
                <Image
                  src="/assets/icons/youtube.svg"
                  width={20}
                  height={20}
                  alt="YouTube"
                />
              </li>
              <li>
                <Image
                  src="/assets/icons/behance.svg"
                  width={20}
                  height={20}
                  alt="Behance"
                />
              </li>
              <li>
                <Image
                  src="/assets/icons/twitter.svg"
                  width={20}
                  height={20}
                  alt="Twitter"
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="custom-container profile-bottom-container">
        <div className="mt-48 min-w-64 max-w-64 text-justify text-sm">
          <p>{profileData.personalDetails.aboutMe}</p>
          <div className="separation-line"></div>
        </div>
        <div className="profile-bottom-right">
          <section className="profile-bottom-section">
            <h2 className="profile-bottom-heading">My Interests</h2>
            <ul className="profile-cards-container">
              {profileData.personalDetails.interests?.map(
                (interest: string, index: number) => (
                  <ProfileTextCard key={index} content={interest} />
                )
              )}
            </ul>
          </section>
          {profileData.personalDetails.moreAboutMe?.lookingFor && (
            <section className="profile-bottom-section">
              <h2 className="profile-bottom-heading">Looking For</h2>
              <ul className="profile-cards-container">
                {profileData.personalDetails.moreAboutMe?.lookingFor?.map(
                  (lookingFor: string, index: number) => (
                    <ProfileTextCard key={index} content={lookingFor} />
                  )
                )}
                {profileData.personalDetails.moreAboutMe?.meetingTypes
                  .length !== 0 &&
                  profileData.personalDetails.moreAboutMe?.meetingTypes.map(
                    (meetingType: string, index: number) => (
                      <ProfileTextCard key={index} content={meetingType} />
                    )
                  )}
              </ul>
            </section>
          )}
          {profileData.personalDetails.yourExpertise.length !== 0 && (
            <section className="profile-bottom-section">
              <h2 className="profile-bottom-heading">My Expertise</h2>
              <ul className="profile-cards-container">
                {profileData.personalDetails.yourExpertise?.map(
                  (expertise: string, index: number) => (
                    <ProfileTextCard key={index} content={expertise} />
                  )
                )}
              </ul>
            </section>
          )}
          {profileData.personalDetails.languages.length !== 0 && (
            <section className="profile-bottom-section">
              <h2 className="profile-bottom-heading">My Languages</h2>
              <ul className="profile-cards-container">
                {profileData.personalDetails.languages?.map(
                  (language: string, index: number) => (
                    <ProfileTextCard key={index} content={language} />
                  )
                )}
              </ul>
            </section>
          )}
          <section className="profile-bottom-section">
            <h2 className="profile-bottom-heading">More About Me</h2>
            <ul className="profile-cards-container">
              {profileData.personalDetails.moreAboutMe?.height && (
                <ProfileTextCard
                  content={`Height - ${profileData.personalDetails.moreAboutMe?.height}`}
                />
              )}

              <ProfileTextCard
                content={profileData.personalDetails.moreAboutMe.educationLevel}
              />
              {profileData.personalDetails.moreAboutMe?.personalityType !==
                "None" && (
                <ProfileTextCard
                  content={`Personality Type - ${profileData.personalDetails.moreAboutMe.personalityType}`}
                />
              )}
              {profileData.personalDetails.moreAboutMe?.smokingHabits !==
                "None" && (
                <ProfileTextCard
                  content={
                    profileData.personalDetails.moreAboutMe.smokingHabits
                  }
                />
              )}
            </ul>
          </section>
        </div>
      </div>
    </section>
  );
}

export default Profile;
