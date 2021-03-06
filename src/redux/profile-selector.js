export const getProfilePage = (state) => {
  return state.profilePage;
};

export const getProfileData = (state) => {
  return state.profilePage.profileData;
};

export const getIsLoading = (state) => {
  return state.profilePage.isLoading;
};

export const getStoredText = (state) => {
  return state.profilePage.storedText;
};

export const getPosts = (state) => {
  return state.profilePage.posts;
};

export const getIsEditing = (state) => {
  return state.profilePage.isEditing;
};
