import { find, findByName } from "../models/avenger.ts";

const avengers = find();

const getAvengers = ({ response }: { response: any }) => {
  response.status = 200;
  response.body = avengers;
};

const getAvengerByName = ({
  params,
  response,
}: {
  params: any;
  response: any;
}) => {
  response.status = 200;
  const avenger = findByName(params?.name);
  response.body = avenger;
};

export { getAvengers, getAvengerByName };
