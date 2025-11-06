const WebWidgets = () => {
  return (
    <section id="widgets" className="full-height-section bg-[#0e1218]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white">News Widgets</h2>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 md:grid-cols-1 grid-rows-1 place-items-center gap-2 p-8" >
            <div style={{ textAlign: "center" }}>
                <div style={{paddingBottom: '20px'}}>F1 News</div>
                <div>
                    <iframe scrolling="no" src="https://apitest.baxterpearson.co.uk/Home/F1NewsSmall" className="iframe" />
                </div>
            </div>
            <div  
              // className="row-start-2"
              style={{ textAlign: "center"}}>
                <div style={{paddingBottom: '20px'}}>Cryptocurrency News</div>
                <div>
                    <iframe scrolling="no" src="https://apitest.baxterpearson.co.uk/Home/CryptoNewsSmall" className="iframe" />
                </div>
            </div>
            <div style={{ textAlign: "center" }}>
                <div style={{paddingBottom: '20px'}}>Premier League News</div>
                <div>
                    <iframe scrolling="no" src="https://apitest.baxterpearson.co.uk/Home/PremNewsSmall" className="iframe" />
                </div>
            </div>
        </div>
        </div>
    </section>
  );
};

export default WebWidgets;