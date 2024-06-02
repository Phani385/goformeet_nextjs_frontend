import CarouselImage from "@/components/shared/CarouselImage";
import Loader from "@/components/shared/Loader";
import ProfileTextCard from "@/components/shared/ProfileTextCard";
import { Button } from "@/components/ui/button";
import { IProfile } from "@/types";
import { Metadata, ResolvingMetadata } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";


type Props = {
  params: { username: string }
}

export async function generateMetadata({ params }: Props, parent: ResolvingMetadata): Promise<Metadata> {
  const username = params.username;

  try {
    const profileResponse = await fetch(`https://goformeet-backend.onrender.com/get-profile/${username}`);
    if (!profileResponse.ok) {
      throw new Error('Network response was not ok');
    }
    const profile = await profileResponse.json();
    const profileData = profile.profile;

    return {
      title: `${profileData.personalDetails.name}`,
      description: `Learn more about ${profileData.personalDetails.name}, their interests, and professional background.`,
      openGraph: {
        images: [
          {
            url: `https://goformeet-nextjs-frontend.vercel.app/api/og?name=${encodeURIComponent(profileData.personalDetails.name)}&username=${username}`,
            width: 1200,
            height: 630,
          }],
      }
    };
  } catch (error) {
    console.error('Error fetching profile data:', error);
    return {
      title: "Error",
      description: "An error occurred while fetching the profile data.",
    };
  }
}


async function Profile({ params }: Props) {
  const username = params.username;

  let name = "";
  let userName = "";
  let url = "";

  async function getProfileData() {
    try {
      const response = await fetch(
        `https://goformeet-backend.onrender.com/get-profile/${username}`
      );
      const data = await response.json();
      return data.profile;
    } catch (error) {
      console.error(error);
    }
  };


  const profileData = await getProfileData();

  if (profileData) {
    name = encodeURIComponent(profileData.personalDetails.name?.trim());
    userName = encodeURIComponent(username);

    url = `https://goformeet-nextjs-frontend.vercel.app/api/og?name=${name}&username=${username}`;
  }


  return (
    profileData ? (

      <section>
        <div className="profile-top-container custom-container">
          <div className="">
            <CarouselImage />
          </div>
          <div className="profile-top-right">
            <div>
              <h1 className="host-name">
                {profileData.personalDetails.name}{" "}
                <span className="host-username">@{profileData.personalDetails.userName}</span>
              </h1>
              <h2 className="host-profession">{profileData.personalDetails.profession}</h2>
              <p className="top-3-intrests">
                {profileData.personalDetails.interests?.slice(0, 3).join(" | ")}
              </p>
            </div>
            <div>
              <div className="flex justify-end">
                <Button className="secondary-button gap-2 items-center">
                  Book Meeting{" "}
                  <Image
                    alt=""
                    src="/assets/icons/rightArrow.svg"
                    width={16}
                    height={16}
                  />
                </Button>
              </div>
              <h4 className="city-details">📍{profileData.personalDetails.city} - City in {profileData.personalDetails.state}</h4>
              <ul className="social-links-container">
                <li>
                  <Link href="/">
                    <Image
                      src="/assets/icons/linkedin.svg"
                      width={20}
                      height={20}
                      alt="linkedin"
                    />
                  </Link>
                </li>
                <li>
                  <Image
                    src="/assets/icons/youtube.svg"
                    width={20}
                    height={20}
                    alt="linkedin"
                  />
                </li>
                <li>
                  <Image
                    src="/assets/icons/behance.svg"
                    width={20}
                    height={20}
                    alt="linkedin"
                  />
                </li>
                <li>
                  <Image
                    src="/assets/icons/twitter.svg"
                    width={20}
                    height={20}
                    alt="linkedin"
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="custom-container profile-bottom-container">
          <div className="mt-48  max-w-64 text-justify text-sm">
            <p>
              Welcome! I&apos; m John Doe, a seasoned Senior Consultant with over
              a decade of experience in the tech industry. My journey in
              technology began with a deep-seated passion for innovation and a
              relentless drive to solve complex problems. Over the years, I have
              honed my skills and expertise in software development, project
              management, and agile methodologies, making significant
              contributions to various high-profile projects and organizations.
              Throughout my career, I have had the privilege of working with some
              of the leading companies in the tech sector.
            </p>
            <div className="seperation-line"></div>
          </div>
          <div className="profile-bottom-right">
            <section className="profile-bottom-section">
              <h2 className="profile-bottom-heading">My Interests</h2>
              <ul className="profile-cards-container">
                {profileData.personalDetails.interests?.map((interest: string, index: number) => (
                  <ProfileTextCard key={index} content={interest} />
                ))}
              </ul>
            </section>
            {
              profileData.personalDetails.moreAboutMe?.lookingFor && <section className="profile-bottom-section">
                <h2 className="profile-bottom-heading">Looking For</h2>
                <ul className="profile-cards-container">
                  <ProfileTextCard content={profileData.personalDetails.moreAboutMe?.lookingFor} />
                </ul>
              </section>
            }
            <section className="profile-bottom-section">
              <h2 className="profile-bottom-heading">My Languages</h2>
              <ul className="profile-cards-container">
                <ProfileTextCard content="Hello" />
                <ProfileTextCard content="Hello" />
                <ProfileTextCard content="Hello" />
                <ProfileTextCard content="Hello" />
                <ProfileTextCard content="Hello" />
                <ProfileTextCard content="Hello" />
              </ul>
            </section>
            <section className="profile-bottom-section">
              <h2 className="profile-bottom-heading">More About Me</h2>
              <ul className="profile-cards-container">
                <ProfileTextCard content="Hello" />
                <ProfileTextCard content="Hello" />
              </ul>
            </section>
          </div>
        </div>
      </section>
    ) : <Loader />
  );
};

export default Profile;
