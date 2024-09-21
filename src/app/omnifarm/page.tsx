"use client";
import * as React from "react";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Modal,
  Typography,
} from "@mui/material";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-75%, -50%)",
};

function Relic() {
  const [pizzaModelState, usePizzaModelState] = React.useState(false);
  const handlePizzaOpen = () => usePizzaModelState(true);
  const handlePizzaClose = () => usePizzaModelState(false);

  const [loadoutModelState, useLoadoutModelState] = React.useState(false);
  const handleLoadoutOpen = () => useLoadoutModelState(true);
  const handleLoadoutClose = () => useLoadoutModelState(false);

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
              width: 800,
              maxWidth: { xs: 350, sm: 500, md: 800 },
            }}
            alt="The house from the offer."
            src="/omnifarm/PizzaOmnifarm.png"
            onClick={() => {
              handlePizzaOpen();
            }}
          />
          <Box
            component="img"
            sx={{
              width: 800,
              maxWidth: { xs: 350, sm: 500, md: 800 },
              marginTop: "15px"
            }}
            alt="The house from the offer."
            src="/omnifarm/ActionsOmnifarm.png"
            onClick={() => {
              handleLoadoutOpen();
            }}
          />
        </Card>
      </Box>
      <Modal
        open={pizzaModelState}
        onClose={handlePizzaClose}
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
            maxWidth: { xs: 500, sm: 700, md: 900, lg: 1200 },
          }}
          src="/omnifarm/PizzaOmnifarm.png"
        />
      </Modal>
      <Modal
        open={loadoutModelState}
        onClose={handleLoadoutClose}
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
            maxWidth: { xs: 500, sm: 700, md: 900, lg: 1200 },
            minWidth: {md: 900,lg: 1200}
          }}
          src="/omnifarm/ActionsOmnifarm.png"
        />
      </Modal>
    </>
  );
}

export default Relic;
