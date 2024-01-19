function PageHeader(props) {
    return (
      <>
        <div className="hero min-h-[40%] bg-flydayHeader2 mt-16"> {/* bg-fixed for fixed background */}
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-lg">
                    <h1 className="mb-5 text-5xl font-bold">{ props.title }</h1>
                </div>
            </div>
        </div>
      </>
    )
  }
  
  export default PageHeader