export const isValidAgeForDriving = age => {
  if (age >= 18 && age <= 80) {
    return true;
  }
  return false;
};
