import Chance from "chance";

const chance = Chance();
export const fakseUserData = () => {
  return chance.name({ middle: true });
};
