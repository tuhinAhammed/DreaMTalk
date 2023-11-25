import React, { useState , createRef } from 'react'
import { useNavigate } from 'react-router-dom'
import currentProfile from "../../../../public/images/profile.png"
import Cropper from "react-cropper";
import { getAuth, updateProfile } from 'firebase/auth';
import { getDownloadURL, getStorage, ref, uploadString } from "firebase/storage";
import "cropperjs/dist/cropper.css";
import { useDispatch, useSelector } from 'react-redux';

const UpdateProfile = () => {
    // const [uploadImageModal , setUploadImageModal] = useState("false")
    const navigate = useNavigate()
    const uploadImageModalCancel = (() => {
        navigate("/")
        console.log("cancel Successfull")
    })
    const dispatch = useDispatch()
    
    const [image, setImage] = useState("");
    const [cropData, setCropData] = useState("");
    const cropperRef = createRef();// eikhane tmi  ()ta dao nai tai problem hoise  
    const storage = getStorage();
    const auth = getAuth()
    const imageData = useSelector(state => state.userLoginInfo.userInfo.photoURL)

    const updateImage = (e) => {
        e.preventDefault();
        let files;
        if (e.dataTransfer) {
            files = e.dataTransfer.files;
        } else if (e.target) {
            files = e.target.files;
        }
        console.log(files , "image")
        const reader = new FileReader();
        reader.onload = () => {
            setImage(reader.result);
        };
        reader.readAsDataURL(files[0]);
    };
    const getCropData = () => {
        if (typeof cropperRef.current?.cropper !== "undefined") {
          setCropData(cropperRef.current?.cropper.getCroppedCanvas().toDataURL());
        }
        const storageRef = ref(storage, auth.currentUser.uid);
        const message4 = cropperRef.current?.cropper.getCroppedCanvas().toDataURL();
        uploadString(storageRef, message4, 'data_url').then((snapshot) => {
        console.log('Uploaded a data_url string!');
        });
        getDownloadURL(storageRef).then((downloadURL) => {
            console.log('File available at', downloadURL);
            
            updateProfile(auth.currentUser, {
                photoURL: downloadURL 
            })
            .then (() => {
                setImage("")
                setCropData("")
            })
            navigate("/")
        });
      };

    return (
        <>
            <div className="updateProfile  flex justify-center bg-primary items-center m-auto h-screen">
                <div className="w-1/2 p-6 rounded bg-white">
                    <div className="text text-2xl font-semibold">Upload Profile Picture</div>
                    <div className="userImg group relative w-[120px] h-[120px] py-1 my-2 rounded-full m-auto overflow-hidden  border-2 ">


                        {
                            image ? <div
                                className="img-preview"
                                style={{ width: "100%", float: "left", height: "300px" }}
                            />
                                :
                                <img src={imageData} alt="" className='' />

                        }

                    </div>
                    <input onChange={updateImage} type='file' />
                    {
                        image &&
                        <Cropper
                            ref={cropperRef}
                            style={{ height: 300, width: "100%" }}
                            zoomTo={0.5}
                            initialAspectRatio={1}
                            preview=".img-preview"
                            src={image}
                            viewMode={1}
                            minCropBoxHeight={10}
                            minCropBoxWidth={10}
                            background={false}
                            responsive={true}
                            autoCropArea={1}
                            checkOrientation={false} // https://github.com/fengyuanchen/cropperjs/issues/671
                            guides={true}
                        />
                    }
                    <div className="btn-list flex mt-6">
                        <button onClick={getCropData} className="bg-primary px-[25px] py-[12px] text-[18px] text-white rounded">Upload</button>
                        <button onClick={uploadImageModalCancel} className="bg-[red] px-[25px] py-[12px] text-[18px] text-white ml-[20px] rounded">Cancel</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UpdateProfile