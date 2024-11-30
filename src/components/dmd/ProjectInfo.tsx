import React from 'react';

interface ProjectInfoProps {
  projectNumber: string;
  requestingOffice: string;
  abc: string;
  projectTitle: string;
}

export const ProjectInfo: React.FC<ProjectInfoProps> = ({ projectNumber, requestingOffice, abc, projectTitle }) => (
  <div className="flex flex-col space-y-2">
    <div className="flex space-x-4">
      <span className="flex space-x-2">
        <h3 className="w-36 font-semibold">Project Number:</h3>
        <p className="w-36 bg-blue-700 text-white px-2 py-1 rounded">{projectNumber}</p>
      </span>
      <span className="flex space-x-2">
        <h3 className="font-semibold">Requesting Office/s:</h3>
        <p className="w-36 bg-blue-700 text-white px-2 py-1 rounded">{requestingOffice}</p>
      </span>
    </div>
    <div className="flex space-x-4">
      <span className="flex space-x-2">
        <h3 className="w-36 font-semibold">ABC:</h3>
        <p className="w-36 bg-blue-700 text-white px-2 py-1 rounded">{abc}</p>
      </span>
      <span className="flex space-x-2">
        <h3 className="w-36 font-semibold">Project Title:</h3>
        <p className="w-36 bg-blue-700 text-white px-2 py-1 rounded">{projectTitle}</p>
      </span>
    </div>
  </div>
);

