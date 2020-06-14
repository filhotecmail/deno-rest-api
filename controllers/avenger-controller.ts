import { getAvengersData } from "../models/avenger.ts";

const avengers = getAvengersData();

const getAvengers = ({
  params,
  response,
}: {
  params: { id: string };
  response: any;
}) => {
  response.status = 200;
  response.body = avengers;
};

export default getAvengers;
