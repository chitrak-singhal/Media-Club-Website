import supabase from "../config/supabaseClient"

const fetchArticles = async (from, to) => {
    const{data,error} = await supabase
    .from('articles')
    .select('*')
    .order('created_at',{ascending:false})
    .range(from,to)
    return {data,error}
}


const uploadData = async (row) => {
    const{data,error} = await supabase
    .from('articles')
    .insert(row)
    //console.log('hi')
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

const updateData = async (row, id) => {
    const{data,error} = await supabase
    .from('articles')
    .update(row)
    .eq('id',id)
    //console.log('hi')
    return {data,error}
}

const updateImage = async (img_id,file) => {
     const {data,error}=await supabase
    .storage
    .from('images')
    .update(img_id,file)
    return {data,error}
    // console.log(data, error);
}
const deleteData = async (id) => {
    const{data,error} = await supabase
    .from('articles')
    .delete()
    .eq('id',id)
    //console.log('hi')
    return {data,error}
}
const deleteImage = async (img_id) => {
    const {data,error}=await supabase
   .storage
   .from('images')
   .remove(img_id)
   return {data,error}
   // console.log(data, error);
}



export default{
    fetchArticles,
    uploadData,
    uploadImage,
    updateData,
    updateImage,
    deleteImage,
    deleteData,
}