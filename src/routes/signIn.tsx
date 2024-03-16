import { createUserDocumentFromAuth, signInWithGooglePopup } from "../utils/firebase/firebase.utils"


export const SignIn=()=>{

    const logGoogleUser=async()=>{
        const response=await signInWithGooglePopup();
       const userDocRef= createUserDocumentFromAuth(response);
    } 

    return (
        <>
        <button onClick={logGoogleUser}>
        Sign-in With Google Popup
        </button>
        </>
    )
}