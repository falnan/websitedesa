export default function Home({data}:any){
    console.log(data);
    return(
        <>
        Ini halaman home
        {data.map((i:any)=>(
            <div>
            <div>
                {i.image}
            </div>
            <div>
                {i.tag}
            </div>
            </div>
        ))}
        </>
    )
}