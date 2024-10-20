import React, { useEffect, useState } from "react";
import JobListings from "./JobListings";
import Spinner from "../components/Spinner"

const JobListing = ({ isHome = false }) => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
        const apiUrl = isHome ? "http://localhost:8000/jobs?_limit=3" : "http://localhost:8000/jobs";
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        setJobs(data);
      } catch (err) {
        console.log("Error getting the server data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  },);

  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          {" "}
          {isHome ? "Recent Jobs" : "Browse Jobs"}{" "}
        </h2>{" "}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {" "}
          { loading ? <Spinner /> : jobs.map((job) => {
            return <JobListings job={job} />;
          })}
        </div>{" "}
      </div>{" "}
    </section>
  );
};

export default JobListing;
