const HomapageGallery = ({ gallery }) => {
  return (
    <section className="my-10 flex justify-center gap-5 overflow-hidden py-4 sm:gap-10">
      {gallery.map((item, i) => (
        <div
          key={i}
          className={`dark:bg-pacamara-dark relative w-44 flex-none ${
            i % 2 !== 0 ? "-rotate-2" : "rotate-2"
          } overflow-hidden rounded-[15px] bg-white sm:w-3/12`}
        >
          <img
            src={item.image}
            width={800}
            alt={item.alt}
            className="image-shine h-[200px] object-cover md:h-[500px]"
          />
        </div>
      ))}
    </section>
  );
};

export default HomapageGallery;
