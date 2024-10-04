"use client";
import * as React from "react";
import {
  Box, Card, Modal
} from "@mui/material";

function Relic() {
  const [pizzaModelState, setPizzaModelState] = React.useState(false);
  const [loadoutModelState, setLoadoutModelState] = React.useState(false);

  return (
    <>
      <Box
        style={{
          display: "flex",
          alignContent: "center",
          justifyContent: "center",
        }}
      >
        <Card
          variant="outlined"
          sx={{
            maxWidth: 800,
            width: "100%",
          }}
          style={{
            textAlign: "center",
            display: "column",
            justifyItems: "center",
            justifyContent: "center",
          }}
        >
          <h2>
            <a href="https://docs.google.com/document/d/1oAqt15SuzRPWgyr8CQUior57mPBDSJEej7N98jKCCpQ/edit#heading=h.tfrzpvg55vi8">
              Full Guide
            </a>
          </h2>
          <Box
            component="img"
            sx={{
              width: "100%",
              height: "auto"
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
        </Card>
      </Box>
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
            maxWidth: 1300
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
            maxWidth: 1300
          }}
          src="/omnifarm/ActionsOmnifarm.png"
        />
      </Modal>
    </>
  );
}

export default Relic;
