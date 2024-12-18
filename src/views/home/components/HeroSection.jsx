const HeroSection = (props) => (<div className="vh-60">
    <div className="container">
        <div className="row py-5">
            <div className="col-md-6 text-center text-md-start">
                <h1 className="text-heading-hero">
                   Ahooy
                </h1>
                <p className="text-p-hero px-5 px-lg-0">
                    Text disini
                </p>
                {props.children}
            </div>
        </div>
    </div >
</div >);

export default HeroSection;
