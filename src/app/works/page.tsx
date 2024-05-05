import { CarouselClient } from "@/components/Carousel";

function Works() {
  return (
    <div>
      <section
        className="about_section layout_padding10"
        style={{ padding: "20px 0" }}
      >
        <div className="container  ">
          <div className="heading_container heading_center">
            <h2>Мои работы</h2>
          </div>
          <CarouselClient />

        </div>
      </section>
    </div>
  );
}
export default Works;
