export const loginUser = async(email,password) => {
    try{
        const formData= new FormData();
        formData.append('email',email);
        formData.append('password',password);

        const response= await fetch('https://stockcareers.com/api/login', {
            method: 'POST',
            body: formData
        });

        const data = await response.json();

        if(response.ok && data.status) {
            return {success: true, token:data.access_token}
        } else {
            return{ success: false, message: data.message || "Login Failed"} ;
        }
    } catch(error){
        return{ success: false, message: "Network error"+error.message}
    }
};