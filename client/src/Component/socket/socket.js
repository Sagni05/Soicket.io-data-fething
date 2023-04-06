import { useEffect, useState } from "react";

export const WebSocketData = (url) => {
  const [data, setData] = useState();
  useEffect(() => {
    const ws = new WebSocket(url);

    ws.onmessage = (event) => {
      //   console.warn(event);
      const response = JSON.parse(event.data);
      setData(response);
    };
    return () => {
      ws.close();
    };
  }, []);

  return [data];
};
