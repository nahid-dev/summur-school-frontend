import PageHeader from "../../components/shared/PageHeader/PageHeader";
import { Helmet } from "react-helmet-async";
import { useQuery } from "react-query";
import Loader from "../../components/Loader/Loader";
import { Fade } from "react-awesome-reveal";
import useAdmin from "../../Hooks/useAdmin";
import useInstructor from "../../Hooks/useInstructor";

const Classes = () => {
  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructor();

  const { data: allClasses = [], isLoading: classLoader } = useQuery({
    queryKey: ["allClasses"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/allClasses");
      return res.json();
    },
  });
  if (classLoader) {
    return <Loader></Loader>;
  }
  // console.log(allClasses);

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>MyDraw | Classes</title>
      </Helmet>
      <PageHeader heading="Classes"></PageHeader>

      <div>
        <div className="bg-gray-100">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
              <h2 className="text-2xl font-bold text-gray-900">
                All Classes Here
              </h2>

              <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
                {allClasses.map((singleClass) => (
                  <Fade direction="left" delay={100} key={singleClass.name}>
                    <div
                      className={
                        singleClass.seats === 0
                          ? "group relative mb-5 bg-red-500"
                          : "group relative mb-5"
                      }
                    >
                      <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                        <img
                          src={singleClass.image}
                          alt="image"
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <h3 className="mt-6  text-gray-500 text-2xl">
                        <a>
                          <span className="absolute  " />
                          {singleClass.name}
                        </a>
                      </h3>
                      <p className="text-base font-semibold text-gray-900">
                        Instructor name: {singleClass.instructor_name}
                      </p>
                      <p className="text-base font-semibold text-gray-900">
                        Available seats: {singleClass.seats}
                      </p>
                      <p className="text-base font-semibold text-gray-900 mb-3">
                        Price: ${singleClass.price}
                      </p>
                      {isAdmin || isInstructor || singleClass.seats === 0 ? (
                        <button className="btn btn-outline btn-disabled">
                          Select Class
                        </button>
                      ) : (
                        <button className="main-btn cursor-pointer">
                          Select Class
                        </button>
                      )}
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

export default Classes;
