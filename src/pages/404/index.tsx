function NotFound() {
  return (
    <div className="h-screen w-full flex flex-col justify-center items-center bg-gradient-to-b from-[#00A099]/90 to-[#8CBB93]/90 bg-opacity-40">
      <h1 className="text-9xl font-extrabold text-white tracking-widest">404</h1>
      <div className="bg-gradient-to-b from-[#00A099]/90 to-[#8CBB93]/90 bg-opacity-40 px-2 text-sm text-white rounded rotate-12 absolute">
        Page Not Found
      </div>
    </div>
  )
}

export default NotFound

