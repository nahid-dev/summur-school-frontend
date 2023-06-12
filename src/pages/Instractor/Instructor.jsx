import React from "react";
import PageHeader from "../../components/shared/PageHeader/PageHeader";
import { Helmet } from "react-helmet-async";
import Loader from "../../components/Loader/Loader";
import { useQuery } from "react-query";
import { Fade } from "react-awesome-reveal";

const Instructor = () => {
  const { data: allInstructor = [], isLoading: allInstructorLoader } = useQuery(
    {
      queryKey: ["allClasses"],
      queryFn: async () => {
        const res = await fetch("http://localhost:5000/allInstructor");
        return res.json();
      },
    }
  );
  if (allInstructorLoader) {
    return <Loader></Loader>;
  }
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>MyDraw | Instructor</title>
      </Helmet>
      <PageHeader heading="Instructor"></PageHeader>
      <div>
        <div className="bg-gray-100">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
              <h2 className="text-2xl font-bold text-gray-900">
                All Instructor Here
              </h2>

              <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
                {allInstructor.map((item) => (
                  <Fade direction="left" delay={100} key={item._id}>
                    {" "}
                    <div className="group relative mb-5">
                      <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                        <img
                          src={item?.user_image}
                          alt="User Image"
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <h3 className="mt-6 text-sm text-gray-500">
                        <a>
                          <span className="absolute inset-0" />
                          {item.name}
                        </a>
                      </h3>
                      <p className="text-base font-semibold text-gray-900">
                        {item.email}
                      </p>
                    </div>
                  </Fade>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Instructor;
