import Image from "next/image";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const UserReviews = () => {
  return (
    <div className="custom-container bg-[#F9DCD4] py-16">
      <Carousel>
        <CarouselContent>
          <CarouselItem>
            <div className="flex items-center gap-10">
              <div className="relative">
                <div className="absolute rounded-md bg-[#F6BFB0] h-full ml-[10%] z-[2] w-4/5"></div>
                <div className="relative bg-[#E03300] p-5 my-10 z-[5]">
                  <Image
                    src="/assets/images/userReview.jpeg"
                    alt="User Image"
                    width={200}
                    height={400}
                  />
                  <h2 className="text-lg text-white text-center mt-5 font-bold">
                    Sophie Jain
                  </h2>
                  <p className="text-white text-center">Actress</p>
                </div>
              </div>
              <div className="w-1/2 mx-auto h-fit">
                <h2 className="font-bold mb-8 text-2xl text-center lg:text-3xl xl:text-4xl">
                  What Our <span className="text-[#E03300]">Users</span> Say
                </h2>
                <p className="text-justify mt-4">
                  As an actress, my schedule is always packed with auditions,
                  rehearsals, and meetings with directors and producers.
                  #Goformeet has been a game-changer for managing my busy
                  calendar.Thanks to #Goformeet, I can focus more on my craft
                  and less on logistical headaches. I highly recommend it to
                  anyone in the entertainment industry!
                </p>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="flex items-center gap-10">
              <div className="relative">
                <div className="absolute rounded-md bg-[#F6BFB0] h-full ml-[10%] z-[2] w-4/5"></div>
                <div className="relative bg-[#E03300] p-5 my-10 z-[5]">
                  <Image
                    src="/assets/images/userReview.jpeg"
                    alt="User Image"
                    width={200}
                    height={400}
                  />
                  <h2 className="text-lg text-white text-center mt-5 font-bold">
                    Sophie Jain
                  </h2>
                  <p className="text-white text-center">Actress</p>
                </div>
              </div>
              <div className="w-1/2 mx-auto h-fit">
                <h2 className="font-bold mb-8 text-2xl text-center lg:text-3xl xl:text-4xl">
                  What Our <span className="text-[#E03300]">Users</span> Say
                </h2>
                <p className="text-justify mt-4">
                  As an actress, my schedule is always packed with auditions,
                  rehearsals, and meetings with directors and producers.
                  #Goformeet has been a game-changer for managing my busy
                  calendar.Thanks to #Goformeet, I can focus more on my craft
                  and less on logistical headaches. I highly recommend it to
                  anyone in the entertainment industry!
                </p>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="flex items-center gap-10">
              <div className="relative">
                <div className="absolute rounded-md bg-[#F6BFB0] h-full ml-[10%] z-[2] w-4/5"></div>
                <div className="relative bg-[#E03300] p-5 my-10 z-[5]">
                  <Image
                    src="/assets/images/userReview.jpeg"
                    alt="User Image"
                    width={200}
                    height={400}
                  />
                  <h2 className="text-lg text-white text-center mt-5 font-bold">
                    Sophie Jain
                  </h2>
                  <p className="text-white text-center">Actress</p>
                </div>
              </div>
              <div className="w-1/2 mx-auto h-fit">
                <h2 className="font-bold mb-8 text-2xl text-center lg:text-3xl xl:text-4xl">
                  What Our <span className="text-[#E03300]">Users</span> Say
                </h2>
                <p className="text-justify mt-4">
                  As an actress, my schedule is always packed with auditions,
                  rehearsals, and meetings with directors and producers.
                  #Goformeet has been a game-changer for managing my busy
                  calendar.Thanks to #Goformeet, I can focus more on my craft
                  and less on logistical headaches. I highly recommend it to
                  anyone in the entertainment industry!
                </p>
              </div>
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>{" "}
    </div>
  );
};

export default UserReviews;
