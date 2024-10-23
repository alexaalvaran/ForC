import React, {ChangeEvent,FormEvent,useState} from "react";
import {useRouter} from "next/navigation";
import { Photo, DefaultPhoto } from "./Photo";
import { on } from "stream";


const NewPhotoComponent = () => {
    const navigate = useRouter();

    const[photo, setPhoto] = useState<Photo>(DefaultPhoto);
    const [photoFile, setPhotoFile] = useState<File | null>(null);

    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        setPhoto({...photo,[event.target.name]: event.target.value});
    };

    const onFileChange = (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files ? event.target.files[0] : null;

        setPhotoFile(file);
        setPhoto({...photo,[event.target.name]: event.target.value});
    }   
    
    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if(!photoFile)
        {
            console.log('no file selected');
            return;            
        }

        const formData = new FormData();
        formData.append("caption", photo.caption);
        formData.append("photo", photoFile)

        fetch(process.env.NEXT_PUBLIC_BACKEND_URL + `/api/photos`, {
            method:'POST',
            body:formData,
        })
        .then((res) => {
            setPhoto(DefaultPhoto);
            setPhotoFile(null);
            navigate.push("/photos");
        })
        .catch((err) => {
            console.log('error from new photo' + err);
        });
    };

    return(
        <div className="NewPhoto">
            <div className='container'>
                <div className='row'>
                    <div className='col-md-8 m-auto'>
                        <h1 className='titleText'> add a new photo</h1>
                    </div>
                    <form onSubmit={onSubmit}>
                        <div className='form-group'>
                            <h3 className="inputPhoto">photo</h3>
                            <input
                            type="file"
                            name="photo"
                            className="photoInputBox form-control"
                            onChange = {onFileChange}
                            accept="image/jpg, image/jpeg, image/png, image/heic"
                            required
                            />
                        </div>
                        <br />
                        <div className='form-group'>
                            <h3 className='inputPhoto'>caption</h3>
                            <input
                            type='text'
                            placeholder='...'
                            name='caption'
                            className='inputPhotoBox form-control'
                            value = {photo.caption}
                            onChange = {onChange}
                            />
                        </div>
                        <br />
                        <button
                        type='submit'
                        className='submitNewPhoto'
                        >
                            add photo
                        </button>
                    </form>

                </div>
            </div>
        </div>
    )
}

export default NewPhotoComponent;