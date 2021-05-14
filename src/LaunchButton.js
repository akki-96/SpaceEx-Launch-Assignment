import { memo } from "react";
const LaunchButton = memo(({ items }) => {
  return (
    <>
      <button value={items}>{items}</button>
    </>
  );
});

export default LaunchButton;
