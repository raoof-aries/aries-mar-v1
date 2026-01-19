import './ContentBlock.css';

const ContentBlock = ({ block }) => {
  if (!block || !block.type) {
    return null;
  }

  switch (block.type) {
    case 'heading':
      const HeadingTag = `h${block.level || 2}`;
      return (
        <HeadingTag className={`content-block content-heading heading-${block.level || 2}`}>
          {block.content}
        </HeadingTag>
      );

    case 'paragraph':
      return (
        <p className="content-block content-paragraph">
          {block.content}
        </p>
      );

    case 'image':
      return (
        <figure className="content-block content-image">
          <img src={block.url} alt={block.alt || ''} />
          {block.caption && (
            <figcaption className="image-caption">{block.caption}</figcaption>
          )}
        </figure>
      );

    case 'bullet-list':
      return (
        <ul className="content-block content-bullet-list">
          {block.items?.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      );

    case 'numbered-list':
      return (
        <ol className="content-block content-numbered-list">
          {block.items?.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ol>
      );

    case 'quote':
      return (
        <blockquote className="content-block content-quote">
          <p>{block.content}</p>
          {block.author && (
            <cite>— {block.author}</cite>
          )}
        </blockquote>
      );

    case 'divider':
      return <hr className="content-block content-divider" />;

    default:
      return (
        <div className="content-block content-unknown">
          <p>Unknown block type: {block.type}</p>
        </div>
      );
  }
};

export default ContentBlock;
