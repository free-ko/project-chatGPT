import React from "react";
import { Button, Input } from "~/degins";

const Main = () => {
  return (
    <>
      <h1>방가</h1>
      <Input placeholder="하이" />
      <Button type="submit" text="버튼" size="small" isBlock />
    </>
  );
};

export default Main;
