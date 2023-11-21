import React from "react";
import TextCentral from "../components/TextCentral";

export default function ScreenC(props: any) {

  const number = props.route && props.route.params && props.route.params.number ? props.route.params.number : 0

  return (
    <TextCentral backgroundColor={"#9932cd"}>Screen C - {number}</TextCentral>
  );
}
