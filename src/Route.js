import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import QuestionPage from "./Pages/QuestionPage";
import AddPersonPage from "./Pages/AddPersonPage";
import GuessPage from "./Pages/GuessPage";

import { useState } from "react";

const RoutesComponent = () => {
  const [sessionId, setSessionId] = useState(null);
  const [person, setPerson] = useState("");

  return (
    <BrowserRouter>
      <Routes>
        <Route
          element={
            <HomePage sessionId={sessionId} setSessionId={setSessionId} />
          }
          path="/"
          exact
        />
        <Route
          element={
            <QuestionPage
              sessionId={sessionId}
              setSessionId={setSessionId}
              setPerson={setPerson}
            />
          }
          path="/question"
        />
        <Route
          element={<AddPersonPage sessionId={sessionId} person={person} />}
          path="/add-person"
        />

        <Route element={<GuessPage person={person} />} path="/guess" />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesComponent;
