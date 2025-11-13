const WebWidgets = () => {
  return (
    <section id="widgets" className="full-height-section bg-[#0e1218]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white">News Widgets</h2>
          <p className="mt-4 text-xl text-gray-400 max-w-2xl mx-auto">
            Here are my Formula 1, Cryptocurrency, and Premier League Football news widgets, which can be embedded in any website. The news sources are updated 24 times per day.
          </p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 md:grid-cols-1 grid-rows-1 place-items-center gap-2 p-8" >
            <div style={{ textAlign: "center" }}>
                <div style={{paddingBottom: '20px'}}>F1 News</div>
                <div>
                    <iframe scrolling="no" src="https://apitest.baxterpearson.co.uk/Home/F1NewsSmall" className="iframe loading" />
                </div>
            </div>
            <div  
              // className="row-start-2"
              style={{ textAlign: "center"}}>
                <div style={{paddingBottom: '20px'}}>Cryptocurrency News</div>
                <div>
                    <iframe scrolling="no" src="https://apitest.baxterpearson.co.uk/Home/CryptoNewsSmall" className="iframe loading"/>
                </div>
            </div>
            <div style={{ textAlign: "center" }}>
                <div style={{paddingBottom: '20px' }}>Technology News</div>
                <div>
                    <iframe scrolling="no" src="https://apitest.baxterpearson.co.uk/Home/TechNewsSmall" className="iframe loading" />
                </div>
            </div>
            <div style={{ textAlign: "center" }}>
                <div style={{paddingBottom: '20px'}}>UK News</div>
                <div>
                    <iframe scrolling="no" src="https://apitest.baxterpearson.co.uk/Home/UKNewsSmall" className="iframe loading" />
                </div>
            </div>
        </div>
        </div>
    </section>
  );
};

export default WebWidgets;