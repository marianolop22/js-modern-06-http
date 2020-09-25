const jokeUrl = 'https://api.chucknorris.io/jokes/random';
const urlUsuarios = 'https://reqres.in/api/users?page=2';

const cloudPreset = 'ay7pqtlm';
const cloudUrl = 'https://api.cloudinary.com/v1_1/dyqatwbhn/upload';

const obtenerChiste = async() => {
    

    try {
        
        const resp = await fetch(jokeUrl);        
        if ( !resp.ok ) {
            throw ('no se pudo realizar la peticion');
        }

        const {icon_url, id, value} = await resp.json();

        return {icon_url, id, value};

    } catch (error) {
        
        // return {
        //     id: 'no se encontrò'
        // }
        throw error;
    }
};

const getUsuarios = async () => {
    
    try {
        const resp = await fetch(urlUsuarios);        
        const {data:usuarios} = await resp.json();
        return usuarios;

    } catch (error) {
        throw error;
    }
};

const subirImagen = async(file) => {
    
    const formData = new FormData();
    formData.append('upload_preset', cloudPreset);
    formData.append('file', file);

    try {
        
        const resp = await fetch(cloudUrl, {
            method: 'POST',
            body: formData
        })

        if ( resp.ok ) {
            const cloudResp = await resp.json();
            console.log('holaa',cloudResp);
            return cloudResp.secure_url;
        } else {
            throw await resp.json();
        }


    } catch (error) {
        throw error;
    }








};







export {
    obtenerChiste,
    getUsuarios,
    subirImagen
}