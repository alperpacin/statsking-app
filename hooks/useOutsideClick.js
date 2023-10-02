import { useEffect } from "react";

function useOutsideClick(ref1, ref2, callback) {
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        ref1.current &&
        !ref1.current.contains(event.target) &&
        (!ref2 ||
          (ref2 && ref2.current && !ref2.current.contains(event.target)))
      ) {
        callback();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref1, ref2, callback]);
}
export default useOutsideClick;
