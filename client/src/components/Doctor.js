import React from "react";
import { useNavigate } from "react-router-dom";

function Doctor({ doctor }) {
  const navigate = useNavigate();
  return (
    <div
      className="card p-2 cursor-pointer"
      onClick={() => navigate(`/book-appointment/${doctor._id}`)}
    >
      <h1 className="card-title">
        {doctor.firstName} {doctor.lastName}
      </h1>
      <hr />
      <p>
        <b>Numéro de téléphone : </b>
        {doctor.phoneNumber}
      </p>
      <p>
        <b>Adresse : </b>
        {doctor.address}
      </p>
      <p>
        <b>Frais pas visite : </b>
        {doctor.feePerCunsultation}
      </p>
      <p>
        <b>Temps : </b>
        {doctor.timings[0]} - {doctor.timings[1]}
      </p>
    </div>
  );
}

export default Doctor;
