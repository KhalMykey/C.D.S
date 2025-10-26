import { useSelector, useDispatch } from "react-redux";
import {
  ProfileContainer,
  ProfilePicHolder,
  ProfileName,
  ProfileEmail,
  PersonableContainer,
  PlusSign,
  ProfilePicImage,
} from "./profile.styles";

import {
  selectProfilePic,
  selectProfilePicPreview,
  selectName,
  selectEmail,
  selectAccountNumber,
} from "../../store/profile/profile.selector";

import { setProfilePic } from "../../store/profile/profile.reducer";

const Profile = () => {
  const dispatch = useDispatch();

  // const handleFileChange = (event) => {
  //   const file = event.target.files[0];
  //   if (file && file.type.substr(0, 5) === "image") {
  //     setSelectedFile(file);
  //     // Create a URL for the image preview
  //     setPreview(URL.createObjectURL(file));
  //   } else {
  //     setSelectedFile(null);
  //     setPreview(null);
  //   }
  // };

  return (
    <ProfileContainer>
      <PersonableContainer>
        <ProfilePicHolder>
          <PlusSign
            type="file"
            accept=".jpg, .jpeg, .png"
            // accept="image/*"
            id="ProfilePicHolder"
          />
          {/* <ProfilePicImage
            src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
            alt="Profile Picture"
          /> */}
        </ProfilePicHolder>
        <ProfileName>SERENA K</ProfileName>
        <ProfileEmail>Account Box:</ProfileEmail>
      </PersonableContainer>
    </ProfileContainer>
  );
};

export default Profile;
