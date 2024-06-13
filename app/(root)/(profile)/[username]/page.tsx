import CarouselImage from "@/components/shared/CarouselImage";
import Loader from "@/components/shared/Loader";
import ProfileTextCard from "@/components/shared/ProfileTextCard";
import DownloadAppModal from "@/components/shared/DownloadAppModal";
import { Metadata, ResolvingMetadata } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

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

    return {
      openGraph: {
        images: [
          {
            url: `${process.env.FRONTEND_URL}/api/og?name=${encodeURIComponent(
              profileData.personalDetails.name
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
        `${process.env.BACKEND_URL}/get-profile/${username}`
      );
      console.log(process.env.BACKEND_URL)
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
              <DownloadAppModal />
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
        <div className="mt-48 w-64 text-justify text-sm">
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
                <ProfileTextCard
                  content={profileData.personalDetails.moreAboutMe?.lookingFor}
                />
              </ul>
            </section>
          )}
          {profileData.personalDetails.languages && (
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
              <ProfileTextCard
                content={`Height - ${profileData.personalDetails.moreAboutMe?.height}`}
              />
              <ProfileTextCard
                content={profileData.personalDetails.moreAboutMe.educationLevel}
              />
              <ProfileTextCard
                content={`Personality Type - ${profileData.personalDetails.moreAboutMe.personalityType}`}
              />
              <ProfileTextCard
                content={profileData.personalDetails.moreAboutMe.smokingHabits}
              />
            </ul>
          </section>
        </div>
      </div>
    </section>
  );
}

export default Profile;
