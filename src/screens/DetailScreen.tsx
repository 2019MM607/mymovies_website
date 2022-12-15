import React from "react";
import { Link, useParams } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

import { Details, useMovieInfo } from "../hooks/useMovieInfo";
import { RelatedList } from "../components/Details/RelatedList";
import { Detail } from "../components/Details/Details";
import { CastList } from "../components/Details/CastList";
import { LoadAnimation } from "../components/animation/LoadAnimation";
import animationData from "../../public/49799-the-panda-eats-popcorn.json";

export const DetailScreen = () => {
  const { id } = useParams<{ id: string }>();
  const { details, cast, loading, relateds, getMovieInfo } = useMovieInfo(
    id as string
  );

  // to catch a refresh and get the movie info again without reloading the page and go to the top of the page
  React.useLayoutEffect(() => {
    getMovieInfo();
    window.scrollTo(0, 0);
  }, [id]);

  return (
    <>
      {loading ? (
        <div className="w-full h-screen bg-slate-900 flex items-center justify-center">
          <LoadAnimation animationData={animationData} />
        </div>
      ) : (
        <div className="bg-slate-900">
          <div className="p-2  w-fit ml-5 rounded-full ">
            <Link to="/" className="">
              <FaArrowLeft className="text-gray-600 text-bold brightness-100" />
            </Link>
          </div>

          <div className="w-full flex justify-center">
            <Detail details={details as Details} />
          </div>

          <div className="mt-5 mb-5">
            <CastList cast={cast} />
          </div>

          <div>
            <RelatedList relateds={relateds} title={details?.title as string} />
          </div>
        </div>
      )}
    </>
  );
};
