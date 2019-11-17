const hasAccessToPhoto = (user, photo) => {
  
  if(photo.privacy!=='public'){
    if (user.role!=='admin') {


        if (photo.userId !== user.id) {
            return photo.user.friends.includes(user.id) || photo.taggedUsers.includes(user.Id);
        }
    }
  }
  return true
};