import { useEffect, useState } from "react";
//** El useEffect se utiliza para realizar dos tareas principales:
// -Obtener el ancho de la ventana inicial:
//    Inicializamos el estado #windowWidth con el ancho de la ventana
//    del navegador al cargar el componente.
// -Escuchar cambios en el tamaño de la ventana:
//    Cada vez que cambie el tamaño de la ventana del navegador,
//    se llamará a la función #handleResize.
//*/

export default function usePantallaChica() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const minWidth = 678;

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const isSmallScreen = windowWidth < minWidth;

  return {
    windowWidth,
    minWidth,
    isSmallScreen,
  };
}
