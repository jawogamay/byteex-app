const Card = ({type = "primary", children}) => {
  const renderCardType = () => {
    if (type === "primary") 
    {
      return "bg-primary"
    }
    if (type === 'basic')
    {
      return "bg-basic"
    }
  }
  return (
    <div className={`max-w-[346px] min-h-[321px] flex flex-col justify-center items-center ${renderCardType()}`}>
      {children}
    </div>
  )
}
export default Card