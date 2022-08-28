import { url } from "inspector"

const Top = () => {
  return (
    <div className=" flex flex-col justify-center">
      <div className='relative w-full h-96 bg-cover' style={{backgroundImage: 'url(/top.png)'}}>
        <div className='absolute top-20 left-56 w-40 text-lg text-center text-wite font-bold'>
            いい感じの
            <br></br>キャッチコピー
        </div>
      </div>
      <div className='bg-cyan-400 h-30 w-100'>
        <div className='text-lg text-center'>
          ファッション・美容のプロとマッチングして<br></br>
        </div>
      </div>
    </div>
  )
}
export default Top
