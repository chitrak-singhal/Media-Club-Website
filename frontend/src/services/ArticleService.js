import supabase from "../config/supabaseClient"

const fetchArticles = async () => {
    const{data,error} = await supabase
    .from('articles')
    .select('*')
    .limit(6)
    return {data,error}
}


const uploadData = async (row) => {
    const{data,error} = await supabase
    .from('articles')
    .insert(row)
    console.log('hi')
    return {data,error}
}

const uploadImage = async (img_id,file) => {
     const {data,error}=await supabase
    .storage
    .from('images')
    .upload(img_id,file)
    return {data,error}
    // console.log(data, error);
}


export default{
    fetchArticles,
    uploadData,
    uploadImage,
}