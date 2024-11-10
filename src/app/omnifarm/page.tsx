"use client";
import * as React from "react";
import { Box, Link, Modal } from "@mui/material";

function Relic() {
  const [pizzaModelState, setPizzaModelState] = React.useState(false);
  const [loadoutModelState, setLoadoutModelState] = React.useState(false);

  return (
    <>
      <h2>
        <Link href="https://docs.google.com/document/d/1oAqt15SuzRPWgyr8CQUior57mPBDSJEej7N98jKCCpQ/edit#heading=h.tfrzpvg55vi8">
          Full Guide
        </Link>
      </h2>
      <p>
        {"Node 3: "}
        <Link href="https://docs.google.com/document/d/14xI0XLeknZfqFDlD3KVynCyVwTTYNuOPsdfymtWPf1c">
          {"Very Greedy's Rank V Guide"}
        </Link>
      </p>
      <Box
        component="img"
        sx={{
          width: "100%",
          height: "auto",
        }}
        alt="The Omnifarm Pizza image"
        src="/omnifarm/PizzaOmnifarm.png"
        onClick={() => {
          setPizzaModelState(true);
        }}
      />
      <Box
        component="img"
        sx={{
          width: "100%",
          height: "auto",
          marginTop: "15px",
        }}
        alt="The actions list for omnifarms"
        src="/omnifarm/ActionsOmnifarm.png"
        onClick={() => {
          setLoadoutModelState(true);
        }}
      />
      <Modal
        open={pizzaModelState}
        onClose={() => setPizzaModelState(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          component="img"
          sx={{
            position: "absolute" as "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "100%",
            height: "auto",
            maxWidth: 1300,
          }}
          src="/omnifarm/PizzaOmnifarm.png"
        />
      </Modal>
      <Modal
        open={loadoutModelState}
        onClose={() => setLoadoutModelState(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          component="img"
          sx={{
            position: "absolute" as "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "100%",
            height: "auto",
            maxWidth: 1300,
          }}
          src="/omnifarm/ActionsOmnifarm.png"
        />
      </Modal>
    </>
  );
}

export default Relic;
