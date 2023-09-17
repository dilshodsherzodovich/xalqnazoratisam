import ContentLoader from "react-content-loader";

function ProblemLoader({ items = 4 }) {
  let loaders = [];
  for (let i = 0; i < items; i++) {
    loaders.push(i);
  }

  const renderLoaders = () => {
    return loaders.map((item) => {
      return (
        <div key={item} className="col-span-4">
          <ContentLoader
            speed={2}
            width="100%"
            height={6}
            viewBox="0 0 100% 6"
            backgroundColor="#cfe8f7"
            foregroundColor="#eee"
          >
            <rect x="0" y="0" rx="3" ry="3" width="410" height="6" />
            <rect x="10" y="0" rx="3" ry="3" width="410" height="6" />
          </ContentLoader>
        </div>
      );
    });
  };

  return renderLoaders();
}

export default ProblemLoader;
