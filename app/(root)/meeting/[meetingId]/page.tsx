import React from "react";

const Meeting = ({ params }: { params: { meetingId: string } }) => {
  return <div>Meeting number: {params.meetingId}</div>;
};

export default Meeting;
