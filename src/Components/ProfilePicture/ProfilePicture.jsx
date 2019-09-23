import React from 'react';
import { ProfilePictureStyle } from './ProfilePicture.module.scss';
import ProfileImage from '../../Assets/profile.png';

const ProfilePicture = () => <img src = { ProfileImage } alt = "Profile" className = { ProfilePictureStyle }></img>

export default ProfilePicture;