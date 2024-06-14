import React from "react";

const ProjectCard = ({ photo, title, type,sourceCode,demon, language, body }) => {
  return (
    <div className="relative flex justify-between flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-3xl">
      <div>
        <div className="relative mx-4 mt-4 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
          <img
            src={photo}
            alt="card-image"
            className="aspect-video object-cover"
          />
        </div>
        <div className="p-6">
          <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
            {title}
          </h5>
          <table className="mb-5 pt-2">
            <tbody>
              <tr>
                <td className="font-semibold pe-3">Type:</td>
                <td>{type} </td>
              </tr>
              <tr>
                <td className="font-semibold pe-3 flex items-start">
                  Language:
                </td>
                <td>{language}</td>
              </tr>
            </tbody>
          </table>
          <p className="block text-justify font-sans text-base antialiased font-light leading-relaxed text-inherit">
            {body}
          </p>
        </div>
      </div>
      <div className="p-6 pt-0">
        <a
          href={demon}
          target="blank"
          className="align-middle text-gray-700 select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-yellow-300 hover:bg-yellow-800 duration-300 hover:text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
          type="button"
        >
          View Demo
        </a>
        <a
          href={sourceCode}
          target="blank"
          className="align-middle ms-3 text-gray-700 select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-yellow-300 hover:bg-yellow-800 duration-300 hover:text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
          type="button"
        >
          View Source Code
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
