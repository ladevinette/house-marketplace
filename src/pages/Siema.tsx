import React, { useState, ChangeEvent } from "react";
import { getAuth } from "firebase/auth";
import { Navigate, useNavigate } from "react-router-dom";
import { auth } from "../firebase.config";
import { useAuthStatus } from "../hooks/useAuthStatus";

const Siema = () => {
  const navigate = useNavigate();
  const [changeDetails, setChangeDetails] = useState(false);
  const [formData, setFormData] = useState(
    auth.currentUser === null
      ? navigate("/")
      : { name: auth.currentUser.displayName, email: auth.currentUser.email }
  );

  if (!formData) {
    return <></>;
  }

  const { name, email } = formData;

  return <div>siema</div>;
};

export default Siema;
