import { createSignal } from "solid-js";
import "./styles.css";

/**
 *
 */
function Events() {
  const [pos, setPos] = createSignal({ x: 0, y: 0 });

  /**
   *
   * @param event
   */
  function handleMouseMove(event: MouseEvent) {
    setPos({
      x: event.clientX,
      y: event.clientY
    });
  }
  return (
    <div onMouseMove={handleMouseMove}>
      The mouse position is {pos().x} x {pos().y}{" "}
    </div>
  );
}

export default Events;
