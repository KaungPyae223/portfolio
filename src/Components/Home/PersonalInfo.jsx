import React from "react";

const PersonalInfo = () => {
  return (
    <div className="mx-20 grid grid-cols-2 my-10">
      <div className="flex justify-center">
        <img className="w-1/2" src="https://images.unsplash.com/photo-1517865288-978fcb780652?q=80&w=1586&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
      </div>
      <div>
        <p className="text-3xl mb-5 font-semibold">Short Bio</p>
        <table>
          <tbody>
          <tr>
              <td className="pe-10 font-semibold">Name:</td>
              <td>Kaung Pyae Aung</td>
            </tr>
            <tr>
              <td className="pe-10 font-semibold">Gender:</td>
              <td>Male</td>
            </tr>
            <tr>
              <td className="pe-10 font-semibold">Date of Birth:</td>
              <td>8 December 2003</td>
            </tr>
            <tr>
              <td className="pe-10 font-semibold">Address:</td>
              <td>No 28 NateBan Street,Kyee Myint Daing, Yangon</td>
            </tr>
            <tr>
              <td className="flex font-semibold items-start pe-10">
                <p>Education:</p>
              </td>
              <td>
                <ul className="list-disc ps-5">
                  <li>High School Graduate (2020) </li>
                  <li>NCC Level 4 diploma in computing (2022) </li>
                  <li>NCC Level 4 diploma in computing (2023) </li>
                  <li> MMSIT SWD(2022) </li>
                  <li> MMSIT WAD(2023) </li>
                </ul>
              </td>
            </tr>
            <tr>
              <td className="pe-10 font-semibold">Work Experience:</td>
              <td>
                Currently no experiences but trying to get work experiences
              </td>
            </tr>
          </tbody>
        </table>
        <div className="cursor-pointer px-4 py-2 mt-10 hover:text-white hover:bg-yellow-800 duration-300 rounded-full bg-yellow-300 w-fit">View Details</div>
      </div>
    </div>
  );
};

export default PersonalInfo;