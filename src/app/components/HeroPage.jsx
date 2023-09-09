
function HeroPage() {
  return (
    <section className="heroPage-container">
      <div className="heroPage">
        <div className="heroPage-tagline">
          Providing the best Sales Service and Support
        </div>
        <div className="availability-container">
          <div class="clock">
            <div class="top"></div>
            <div class="right"></div>
            <div class="bottom"></div>
            <div class="left"></div>
            <div class="center"></div>
            <div class="shadow"></div>
            <div class="hour"></div>
            <div class="minute"></div>
            <div class="second"></div>
          </div>
          <div className="available-24">
            <div className="available">Available</div>
            <div className="available">24 * 7</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroPage;
