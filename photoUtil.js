export const isUserTagged = (user, photo) => {
  return photo.taggedUsers.map(user => user.id).includes(user.id);
};

export const isUserBlocked = (user, photo) => {
  return photo.user.blockedFriends.map(user => user.id).includes(user.id);
};
