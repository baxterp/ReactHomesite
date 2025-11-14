const Demos = () => {
  return (
    <section id="emdemos" className="full-height-section bg-[#161c26]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Working Demos</h2>
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-1 md:grid-cols-1 grid-rows-1 place-items-center gap-2 p-8" >
            <div style={{ textAlign: "center" }}>
                <div style={{paddingBottom: '10px', fontSize: '16pt'}}>Natural Language Translator</div>
                <div className="iframeContainer loading">
                    <iframe scrolling="no" src="https://openai.baxterpearson.co.uk/NaturalLanguageTranslator" className="iframeContent"/>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Demos;