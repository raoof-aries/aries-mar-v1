import { useParams } from 'react-router-dom';
import { getServiceById } from '../../services/serviceApi';
import ContentBlock from '../../components/ContentBlocks/ContentBlock';
import HeroImage from '../../assets/images/home/hero.webp';
import './ServiceDetail.css';

const ServiceDetail = () => {
  const { slug } = useParams();
  const service = getServiceById(slug);

  if (!service) {
    return (
      <div className="service-detail-container">
        <div className="service-not-found">
          <h2>Service Not Found</h2>
          <p>The service you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="service-detail-wrapper">
      {/* Hero Header Section */}
      <div className="service-hero-section">
        <div className="service-hero-background">
          <img src={HeroImage} alt={service.title} className="service-hero-bg-image" />
          <div className="service-hero-overlay"></div>
        </div>
        <div className="service-hero-content">
          <h1 className="service-title">{service.title}</h1>
          {service.description && (
            <p className="service-description">{service.description}</p>
          )}
        </div>
      </div>

      {/* Content Section */}
      <div className="service-detail-container">
        <div className="service-content">
          {service.blocks && service.blocks.length > 0 ? (
            service.blocks.map((block, index) => (
              <ContentBlock key={index} block={block} />
            ))
          ) : (
            <p className="no-content">No content available for this service.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
