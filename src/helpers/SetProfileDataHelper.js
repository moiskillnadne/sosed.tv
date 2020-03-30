export const SetProfileDataHelper = (setState, data, service) => {

// Example profile data format
  // const ProfileDataExm = {
  //   name: '',
  //   surname: '',
  //   icon: '',
  //   profileID: '',
  // }

  switch (service){
    case 'google':
      setState({
        name: data.profileObj.givenName,
        surname: data.profileObj.familyName,
        icon: data.profileObj.imageUrl,
        profileID: data.profileObj.googleId,
      })
      break;
    case 'vk':
      setState({
        name: data.first_name,
        surname: data.last_name,
        icon: data.photo_50 ? data.photo_50 : '',
        profileID: data.id,
      })
      break;
    default:
      setState({
        name: '',
        surname: '',
        icon: '',
        profileID: '',
      })
  }
    
}