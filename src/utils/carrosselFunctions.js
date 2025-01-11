// Função para calcular a largura do slide dinamicamente
export function updateSlideWidth(carouselRef, setSlideWidth, visibleTables) {
  if (carouselRef.current) {
    const containerWidth = carouselRef.current.offsetWidth;
    
    // A largura de cada slide será o container visível dividido pelo número de tabelas visíveis
    const calculatedSlideWidth = containerWidth / visibleTables;
    setSlideWidth(calculatedSlideWidth);
  }
}
// Função para ir ao próximo slide
export function goToNextSlide(currentIndex, setCurrentIndex, totalSlides, visibleTables) {
  const maxIndex = totalSlides - visibleTables; // Último índice que pode ser alcançado
  if (currentIndex < maxIndex) {
    setCurrentIndex(currentIndex + 1);
  }
}

// Função para voltar ao slide anterior
export function goToPreviousSlide(currentIndex, setCurrentIndex) {
  if (currentIndex > 0) {
    setCurrentIndex(currentIndex - 1);
  }
}

// Função para inicializar o listener de redimensionamento
export function initializeResizeListener(carouselRef, setSlideWidth, visibleTables) {
  // Função que atualiza a largura do slide sempre que o contêiner é redimensionado
  function resizeListener() {
    updateSlideWidth(carouselRef, setSlideWidth, visibleTables);
  }

  // Adiciona o evento de escuta para o redimensionamento da janela
  window.addEventListener("resize", resizeListener);

  // Chama o listener de redimensionamento uma vez ao montar o componente
  resizeListener();

  // Retorna uma função de limpeza para remover o listener ao desmontar o componente
  return function cleanup() {
    window.removeEventListener("resize", resizeListener);
  };
}

// Manipuladores de eventos de toque e movimento
export function getTouchHandlers(
  currentIndex, 
  setCurrentIndex, 
  totalSlides, 
  visibleTables, 
  setIsDragging, 
  setStartX, 
  isDragging, 
  startX, 
  translateX, 
  setTranslateX
) {
  // Inicia o toque ou clique, preparando o estado inicial de arraste
  function handleTouchStart(event) {
    setIsDragging(true);
    setStartX(event.touches ? event.touches[0].clientX : event.clientX);
  }

  // Monitora o movimento do arraste ou toque, calculando a distância movida
  function handleTouchMove(event) {
    if (!isDragging) return;
    const clientX = event.touches ? event.touches[0].clientX : event.clientX;
    const diffX = clientX - startX;
    setTranslateX(diffX);
  }

  // Finaliza o arraste ou toque, decidindo se deve ir para o próximo ou anterior slide
  function handleTouchEnd() {
    setIsDragging(false);
    if (translateX < -50) {
      goToNextSlide(currentIndex, setCurrentIndex, totalSlides, visibleTables); // Avança para o próximo slide
    } else if (translateX > 50) {
      goToPreviousSlide(currentIndex, setCurrentIndex); // Retrocede para o slide anterior
    }
    setTranslateX(0); // Reseta o translateX após o movimento
  }

  return {
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd,
  };
}
