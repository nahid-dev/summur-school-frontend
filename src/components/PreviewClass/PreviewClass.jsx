import React from "react";
import Container from "../shared/Container/Container";
import { Fade } from "react-awesome-reveal";

const PreviewClass = () => {
  return (
    <>
      <Container>
        <div className="relative overflow-hidden bg-white">
          <div className="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
            <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
              <Fade direction="left">
                <div className="sm:max-w-lg">
                  <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                    Collection of our few Classroom here.
                  </h1>
                  <p className="mt-4 text-xl text-gray-500">
                    This year, our new summer collection will shelter you from
                    the harsh elements of a world that does not care if you live
                    or die.
                  </p>
                </div>
              </Fade>
              <div>
                <div className="mt-10">
                  {/* Decorative image grid */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
                  >
                    <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                      <div className="flex items-center space-x-6 lg:space-x-8">
                        <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                          <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                            <img
                              src="https://images.pexels.com/photos/8423048/pexels-photo-8423048.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                              alt=""
                              className="h-full w-full object-cover object-center"
                            />
                          </div>
                          <div className="h-64 w-44 overflow-hidden rounded-lg">
                            <img
                              src="https://images.pexels.com/photos/8381903/pexels-photo-8381903.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                              alt=""
                              className="h-full w-full object-cover object-center"
                            />
                          </div>
                        </div>
                        <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                          <div className="h-64 w-44 overflow-hidden rounded-lg">
                            <img
                              src="https://images.pexels.com/photos/6990448/pexels-photo-6990448.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                              alt=""
                              className="h-full w-full object-cover object-center"
                            />
                          </div>
                          <div className="h-64 w-44 overflow-hidden rounded-lg">
                            <img
                              src="https://images.pexels.com/photos/6816544/pexels-photo-6816544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                              alt=""
                              className="h-full w-full object-cover object-center"
                            />
                          </div>
                          <div className="h-64 w-44 overflow-hidden rounded-lg">
                            <img
                              src="https://images.pexels.com/photos/6925336/pexels-photo-6925336.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                              alt=""
                              className="h-full w-full object-cover object-center"
                            />
                          </div>
                        </div>
                        <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                          <div className="h-64 w-44 overflow-hidden rounded-lg">
                            <img
                              src="https://images.pexels.com/photos/8466763/pexels-photo-8466763.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                              alt=""
                              className="h-full w-full object-cover object-center"
                            />
                          </div>
                          <div className="h-64 w-44 overflow-hidden rounded-lg">
                            <img
                              src="https://images.pexels.com/photos/8613143/pexels-photo-8613143.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                              alt=""
                              className="h-full w-full object-cover object-center"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <Fade direction="left">
                    <a href="#" className="main-btn">
                      Class Rooms
                    </a>
                  </Fade>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default PreviewClass;
