/* eslint-disable no-eval */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/no-array-index-key */
import React from "react";

export const Mistok = ({ objects }: { objects: Record<string, unknown> }) => {
  const [activeTab, setActiveTab] = React.useState(0);
  const [position, setPosition] = React.useState({ x: 16, y: 16 });
  const [dragging, setDragging] = React.useState(false);
  const dragOffset = React.useRef({ x: 0, y: 0 });
  const objectKeys = Object.keys(objects);

  const handleMouseDown = (event: React.MouseEvent<HTMLDivElement>) => {
    setDragging(true);
    dragOffset.current = {
      x: event.clientX - position.x,
      y: event.clientY - position.y,
    };
    document.body.style.userSelect = "none";
  };

  const handleMouseUp = () => {
    setDragging(false);
    document.body.style.userSelect = "";
  };

  const handleMouseMove = (event: MouseEvent) => {
    if (!dragging) return;
    setPosition({
      x: event.clientX - dragOffset.current.x,
      y: event.clientY - dragOffset.current.y,
    });
  };

  React.useEffect(() => {
    if (dragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
    } else {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    }
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dragging]);

  return (
    <section
      style={{ left: position.x, top: position.y }}
      className="fixed left-4 top-4 z-[100] h-125 min-h-75 w-125 min-w-75 resize overflow-hidden rounded-xl bg-[#0D1116] text-xs text-[white] shadow-xl"
    >
      <div
        className="flex w-full cursor-grab flex-wrap items-center justify-start gap-2 bg-[#161B22] px-6 py-4"
        onMouseDown={handleMouseDown}
      >
        <h1 className="mr-2 font-bold">mistok</h1>
        {objectKeys.map((key, index) => (
          <button
            key={`btn-${key}-${index}`}
            onClick={() => setActiveTab(index)}
            style={{
              background: activeTab === index ? "#5046E5" : "#21262C",
            }}
            className="rounded-lg px-2 py-1 text-xs text-[white] transition-all duration-200"
          >
            {key}
          </button>
        ))}
      </div>

      <pre className="leading-5 h-full overflow-y-scroll whitespace-pre-wrap break-all p-6 pb-32">
        {objectKeys[activeTab] &&
          JSON.stringify(objects[objectKeys[activeTab]], null, 2)}
      </pre>
    </section>
  );
};
