import React from "react";
import { useQuery } from "react-query";
import Loader from "../Loader/Loader";
import { Fade } from "react-awesome-reveal";
import Container from "../shared/Container/Container";

const TopClasses = () => {
  const { data: topClasses = [], isLoading: loading } = useQuery({
    queryKey: ["topClasses"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/topClasses");
      return res.json();
    },
  });
  //   console.log(topClasses);
  if (loading) {
    return <Loader></Loader>;
  }

  return (
    <div>
      <Container>
        <div className="">
          <div className="mx-auto">
            <div className="mx-auto max-w-2xl py-10 sm:py-24 lg:max-w-none lg:py-14 lg:pt-0">
              <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
                {topClasses.map((item) => (
                  <Fade key={item._id}>
                    <div className="group relative md:m-7">
                      <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:scale-105 duration-300 sm:h-64">
                        <img
                          src={item.image}
                          alt="Class picture"
                          className="h-full w-full object-cover object-center"
                        />
                      </div>

                      <p className="text-base font-semibold text-gray-900 mt-3">
                        {item.name}
                      </p>
                    </div>
                  </Fade>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default TopClasses;
