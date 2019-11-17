export const cc = async (v, b, q) => {
  const rate = await currency.fetchRate(b, q);
  return v * rate;
};
