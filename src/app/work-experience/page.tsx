'use client'
import WorkingExperienceCard, { WorkCardProps } from "@/components/working-experience-card";
import { useEffect, useState } from "react";

export default function WorkingExperience() {
  const [workingExperiences, setWorkingExperiences] = useState<WorkCardProps[]>();
  useEffect(() => {
    (async () => {
      let response = await fetch("/data/working-experience.json");
      let data = await response.json();
      setWorkingExperiences(data);
    })();
  }, []);

  return (
    <>
      <div className="space-y-2">
        {workingExperiences?.map((experience, index) => (
          <WorkingExperienceCard key={index} {...experience} />
        ))}
      </div>

      <div className="text-center text-sm pt-2 pb-2">
        All trademarks, logos and brand names are the property of their
        respective owners.
      </div>
    </>
  );
}
