"use client";

import React, { useState } from "react";
import HomeCard from "./HomeCard";
import { useRouter } from "next/navigation";
import MeetingModal from "./MeetingModal";

const MeetingTypeList = () => {
  const router = useRouter();

  const [meetingState, setMeetingState] = useState<
    "isJoiningMeeting" | "isScheduleMeeting" | "isInstantMeeting" | undefined
  >();

  const createMeeting = () => {};

  return (
    <section className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
      <HomeCard
        title="New Meeting"
        description="Start an instant meeting"
        variant="bg-orange-1"
        icon="/icons/add-meeting.svg"
        handleClick={() => setMeetingState("isInstantMeeting")}
      />
      <HomeCard
        title="Join Meeting"
        description="via invitation link"
        variant="bg-blue-1"
        icon="/icons/join-meeting.svg"
        handleClick={() => setMeetingState("isJoiningMeeting")}
      />
      <HomeCard
        title="Schedule Meeting"
        description="Plan your meeting"
        variant="bg-purple-1"
        icon="/icons/schedule.svg"
        handleClick={() => setMeetingState("isScheduleMeeting")}
      />
      <HomeCard
        title="View Recordings"
        description="Meeting recordings"
        variant="bg-yellow-1"
        icon="/icons/recordings.svg"
        handleClick={() => router.push("/recordings")}
      />

      <MeetingModal
        isOpen={meetingState === "isInstantMeeting"}
        onClose={() => setMeetingState(undefined)}
        title="Start an Instant Meeting"
        className="text-center"
        buttonText="Start Meeting"
        handleClick={createMeeting}
      />
    </section>
  );
};

export default MeetingTypeList;
