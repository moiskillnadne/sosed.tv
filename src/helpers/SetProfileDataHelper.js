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
        name: data.user.first_name,
        surname: data.user.last_name,
        icon: '',
        profileID: ''
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