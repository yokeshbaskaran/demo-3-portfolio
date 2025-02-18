"use client";
const ProdsDetail = ({ params }: { params: { projectId: string } }) => {
  return <div>pagename - {params.projectId} </div>;
};

export default ProdsDetail;
