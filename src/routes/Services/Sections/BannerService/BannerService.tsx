import './BannerService.css'

const BannerService = ({ service }: { service: string }) => {
  return (
    <section className="banner-service" id={`banner-service-${service}`}>
      <div
        className="hero-image"
        style={{ backgroundImage: `url(/images/hero-${service}.png)` }}
      />
    </section>
  )
}

export default BannerService
