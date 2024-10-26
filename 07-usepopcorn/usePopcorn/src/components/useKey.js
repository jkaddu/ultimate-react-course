import { useEffect } from "react";

export function useKey(key, action) {
  useEffect(
    function () {
      function keyCallBack(e) {
        if (e.code.toLowerCase() === key.toLowerCase()) {
          action();
        }
      }
      document.addEventListener("keydown", keyCallBack);

      return function () {
        document.removeEventListener("keydown", keyCallBack);
      };
    },
    [key, action]
  );
}
