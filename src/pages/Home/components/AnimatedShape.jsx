function AnimatedShape({ className, shape }) {
  return (
    <div className={className}>
      <img src={shape} className="object-cover" alt="" />
    </div>
  );
}

export default AnimatedShape;
