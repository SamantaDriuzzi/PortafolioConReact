import { useState, useEffect } from "react";

function useVelocidadConexion() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const verificaVelocidadConexion = () => {
      const conexión =
        navigator.connection ||
        navigator.mozConnection ||
        navigator.webkitConnection;

      if (conexión) {
        const velocidadMbps = conexión.downlink;

        if (velocidadMbps < 2) {
          setLoading(true);
        } else {
          setLoading(false);
        }
      }
    };

    verificaVelocidadConexion();

    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return loading;
}

export default useVelocidadConexion;
