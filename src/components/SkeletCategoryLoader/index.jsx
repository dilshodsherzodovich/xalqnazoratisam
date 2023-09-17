import ContentLoader from "react-content-loader";

function CategoryLoader({ items = 5 }) {
  let loaders = [];
  for (let i = 0; i < items; i++) {
    loaders.push(i);
  }

  const renderLoaders = () => {
    return loaders.map((item, index) => {
      return (
        <div className="col-span-1" key={index}>
          <ContentLoader
            speed={2}
            width="100%"
            height={85}
            viewBox="0 0 100% 85"
            backgroundColor="#cfe8f7"
            foregroundColor="#eee"
          >
            <rect x="0" y="0" rx="24" ry="24" width="100%" height="85" />
          </ContentLoader>
        </div>
      );
    });
  };
  return (
    <>{renderLoaders()}</>
    // <ContentLoader
    //   speed={2}
    //   width="100%"
    //   height={85}
    //   viewBox="0 0 100% 85"
    //   backgroundColor="#cfe8f7"
    //   foregroundColor="#eee"
    // >
    //   {/* <rect x="48" y="5" rx="3" ry="3" width="110" height="8" />
    //   <rect x="48" y="28" rx="3" ry="3" width="410" height="6" />
    //   <rect x="48" y="48" rx="3" ry="3" width="380" height="6" />
    //   <rect x="48" y="68" rx="3" ry="3" width="178" height="6" />
    //   <circle cx="20" cy="20" r="20" /> */}
    //   <rect x="0" y="0" rx="24" ry="24" width="100%" height="85" />
    // </ContentLoader>
  );
}

export default CategoryLoader;
