const Header = () => {
  return (
    <div className='flex justify-between h-5 w-full m-4'>
      <img src='/akanuke_rogo.png' className=''></img>
      <div className='flex justify-end h-5'>
        <button>
          <img src='/chat.svg' className='h-5 mx-2'></img>
        </button>
        <button>
          <img src='/notify.png' className='h-5 mx-2'></img>
        </button>
        <button>
          <img src='Profile.svg' className='h-5 mx-2'></img>
        </button>
        <button>
          <img src='/menu.png' className='h-4 mx-2'></img>
        </button>
      </div>
    </div>
  )
}
export default Header
