export const getTotalClaps = story => {
  let claps = 0;
  for (const fan of story.fans) {
    claps += fan.claps.length;
  }
  return claps;
};
