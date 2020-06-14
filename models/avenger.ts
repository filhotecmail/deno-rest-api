interface IAvenger {
  name: string;
  heroeName: string;
}

const avengers: Array<IAvenger> = [
  {
    name: "Steve Rogers",
    heroeName: "Captain America",
  },
  {
    name: "Tony Stark",
    heroeName: "Iron Man",
  },
  {
    name: "Thor",
    heroeName: "Thor",
  },
  {
    name: "Bruce Banner",
    heroeName: "Hulk",
  },
  {
    name: "Natasha Romanoff",
    heroeName: "Black Widow",
  },
  {
    name: "Clint Barton",
    heroeName: "Hawkeye",
  },
];

const find = () => {
  return avengers;
};

const findByName = (name: string) => {
  return avengers.filter((avenger) => avenger?.name === name);
};

const findByHeroeName = (heroeName: string) => {
  return avengers.filter((avenger) => avenger?.heroeName === heroeName);
};

export { IAvenger, find, findByName };
