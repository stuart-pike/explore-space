function DesignSystem() {
  return (
    <>
      <body className="bg-dark text-neutral">
        <div className="container">
          <h1>Design system</h1>
          <section id="colors" style={{ margin: "4rem 0" }}>
            <h2 className="numbered-title" style={{ marginBottom: "0.5rem" }}>
              <span>01</span> colors
            </h2>

            <div
              className="grid"
              style={{ gridTemplateColumns: "1fr 1fr 1fr" }}
            >
              <div>
                <div
                  className="bg-dark text-neutral"
                  style={{
                    padding: "3rem 1rem 1rem",
                    border: "1px solid white",
                  }}
                >
                  #0BOD17{" "}
                </div>

                <p className="grid" style={{ gridTemplateColumns: "1fr 3fr" }}>
                  <span className="text-neutral">RGB</span> 11, 13, 23
                </p>
                <p className="grid" style={{ gridTemplateColumns: "1fr 3fr" }}>
                  <span className="text-neutral">HSL</span> 230, 35%, 7%
                </p>
              </div>

              <div>
                <div
                  className="bg-accent text-dark"
                  style={{
                    padding: "3rem 1rem 1rem",
                    border: "1px solid white",
                  }}
                >
                  #D0D6F9{" "}
                </div>

                <p className="grid" style={{ gridTemplateColumns: "1fr 3fr" }}>
                  <span className="text-neutral">RGB</span> 208, 214, 249
                </p>
                <p className="grid" style={{ gridTemplateColumns: "1fr 3fr" }}>
                  <span className="text-neutral">HSL</span> 231, 77%, 90%
                </p>
              </div>
              <div>
                <div
                  className="bg-neutral text-dark"
                  style={{
                    padding: "3rem 1rem 1rem",
                    border: "1px solid white",
                  }}
                >
                  #F5F5F5{" "}
                </div>

                <p className="grid" style={{ gridTemplateColumns: "1fr 3fr" }}>
                  <span className="text-neutral">RGB</span> 245, 245, 245
                </p>
                <p className="grid" style={{ gridTemplateColumns: "1fr 3fr" }}>
                  <span className="text-neutral">HSL</span> 0, 0%, 96%
                </p>
              </div>
            </div>
          </section>

          {/* TYPOGRAPHY */}
          <section id="typography" style={{ margin: "4rem 0" }}>
            <h2 className="numbered-title">
              <span>02 </span>Typography
            </h2>
            <div className="flex">
              <div
                className="flow"
                style={{ flexBasis: "100%", "--flow-space": "3rem" }}
              >
                <div>
                  <p className="text-accent">
                    Heading 1 - Bellefair Regular - 150px
                  </p>
                  <p className="fs-900 ff-serif uppercase">Earth</p>
                </div>
                <div>
                  <p className="text-accent">
                    Heading 2 - Bellefair Regular - 100px
                  </p>
                  <p className="fs-800 ff-serif uppercase">Venus</p>
                </div>
                <div>
                  <p className="text-accent">
                    Heading 3 - Bellefair Regular - 56px
                  </p>
                  <p className="fs-700 ff-serif uppercase">Jupiter & Saturn</p>
                </div>
                <div>
                  <p className="text-accent">
                    Heading 4 - Bellefair Regular - 32px
                  </p>
                  <p className="fs-600 ff-serif uppercase">
                    Uranus, Neptune, & Pluto
                  </p>
                </div>
                <div>
                  <p className="text-accent">
                    Heading 5 - Barlow Condensed Regular - 28px - 4.75 Character
                    Space
                  </p>
                  <p className="text-accent fs-500 ff-sans-cond uppercase letter-spacing-1">
                    So, you want to travel to space
                  </p>
                </div>
              </div>

              <div
                className="flow"
                style={{ flexBasis: "100%", "--flow-space": "3rem" }}
              >
                <div>
                  <p className="text-accent">
                    Subheading 1 - Bellefair Regular - 28px
                  </p>
                  <p className="fs-500 ff-serif uppercase">384,400 km</p>
                </div>
                <div>
                  <p className="text-accent">
                    Subheading 2 - Barlow Condensed Regular - 14px - 2.35
                    Character Space
                  </p>
                  <p className="fs-200 ff-sans-cond uppercase letter-spacing-3">
                    Avg. Distance
                  </p>
                </div>
                <div>
                  <p className="text-accent">
                    Nav Text - Barlow Condensed Regular - 16px - 2.7 Character
                    Space
                  </p>
                  <p className="fs-300 ff-sans-cond uppercase letter-spacing-2">
                    Europa
                  </p>
                </div>
                <div>
                  <p>Body Text</p>
                  <p className="text-accent">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In
                    nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed
                    pretium, ligula sollicitudin laoreet viverra, tortor libero
                    sodales leo, eget blandit nunc tortor eu nibh. Nullam
                    mollis. Ut justo. Suspendisse potenti.Lorem ipsum dolor sit
                    amet, consectetuer adipiscing elit. Phasellus hendrerit.
                    Pellentesque aliquet nibh nec urna. In nisi neque, aliquet
                    vel, dapibus id, mattis vel, nisi. Sed pretium, ligula
                    sollicitudin laoreet viverra, tortor libero sodales leo,
                    eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo.
                    Suspendisse potenti.Lorem ipsum dolor sit amet, consectetuer
                    adipiscing elit. Phasellus hendrerit. Pellentesque aliquet
                    nibh nec urna. In nisi neque, aliquet vel, dapibus id,
                    mattis vel, nisi.{" "}
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="flow" id="interactive-elements">
            <h2 className="numbered-title">
              <span>03</span> Interactive elements
            </h2>

            {/* <!-- navigation --> */}
            <div>
              <nav>
                <ul className="ff-sans-cond primary-navigation flex underline-indicators">
                  <li className="active">
                    <a
                      className="text-neutral uppercase letter-spacing-2"
                      href="#"
                    >
                      <span>01</span>Active
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-neutral uppercase letter-spacing-2"
                      href="#"
                    >
                      <span>02</span>Hovered
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-neutral uppercase letter-spacing-2"
                      href="#"
                    >
                      <span>03</span>Idle
                    </a>
                  </li>
                </ul>
              </nav>
            </div>

            <div className="flex">
              <div>
                {/* <!-- explore button --> */}
                <a
                  href="#"
                  className="large-button uppercase bg-neutral ff-serif fs-600 text-dark "
                  style={{ marginTop: "5rem", marginLeft: "4rem" }}
                >
                  Explore
                </a>
              </div>
              <div className="container">
                <div>
                  {/* <!-- Tabs --> */}
                  <div className="tab-list flex underline-indicators">
                    <button
                      aria-selected="true"
                      className="bg-dark ff-sans-cond text-accent uppercase letter-spacing-2"
                    >
                      Moon
                    </button>
                    <button
                      aria-selected="false"
                      className="bg-dark ff-sans-cond text-accent uppercase letter-spacing-2"
                    >
                      Mars
                    </button>
                    <button
                      aria-selected="false"
                      className="bg-dark ff-sans-cond text-accent uppercase letter-spacing-2"
                    >
                      Europa
                    </button>
                  </div>
                  {/* <!-- Dots --> */}
                  <div className="dot-indicators flex">
                    <button aria-selected="true">
                      <span className="sr-only">Slide title</span>
                    </button>
                    <button aria-selected="false">
                      <span className="sr-only">Slide title</span>
                    </button>
                    <button aria-selected="false">
                      <span className="sr-only">Slide title</span>
                    </button>
                  </div>
                  {/* <!-- Numbers --> */}

                  <div className="number-indicators flex">
                    <button aria-selected="true" className="ff-serif fs-600">
                      <span className="sr-only ff-serif fs-600">
                        Slide title
                      </span>
                      1
                    </button>
                    <button aria-selected="false" className="ff-serif fs-600">
                      <span className="sr-only ff-serif fs-600">
                        Slide title
                      </span>
                      2
                    </button>
                    <button aria-selected="false" className="ff-serif fs-600">
                      <span className="sr-only">Slide title</span>3
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </body>
    </>
  );
}

export default DesignSystem;
