"use client";
import { getSheetData } from "../actions/gl-sheet.actions";
import Button from "@/components/Header/Button";

export default function Page() {

  const handleOnGetSheetDataClick = async () => {
    const response = await getSheetData();
    console.log(response)
  };

  return <Button onClick={handleOnGetSheetDataClick}>Get Sheet Data</Button>;
}