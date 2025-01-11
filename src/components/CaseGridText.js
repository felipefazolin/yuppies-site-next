const CaseGridText = ({ content }) => {
  return (
    <>
      <div className="pt-9 pb-9 d-flex justify-content-center">
        <div className="container ">
          <div className="row d-flex ">
            <div className="col-4 offset-1">
              <div className="flex-grow-1">
                <div className="case-grid-text-title">Título Loren</div>
                <div className="case-grid-line"></div>
              </div>
            </div>
            <div className="col-6 ">
              <div className="case-grid-text-text ">
                <p className="case-grid-text-subtitle">
                  O Lorem Ipsum é um texto modelo da indústria tipográfica e de
                  impressão. O Lorem Ipsum tem vindo a ser o texto padrão usado
                  por estas indústrias desde o ano de 1500, quando uma misturou
                  os caracteres de um texto para criar um espécime de livro.
                </p>

                <p className="case-grid-text-text">
                  O Lorem Ipsum é um texto modelo da indústria tipográfica e de
                  impressão. O Lorem Ipsum tem vindo a ser o texto padrão usado
                  por estas indústrias desde o ano de 1500, quando uma misturou
                  os caracteres de um texto para criar um espécime de livro.
                  Este texto não só sobreviveu 5 séculos, mas também o salto
                  para a tipografia electrónica, mantendo-se essencialmente
                  inalterada. Foi popularizada nos anos 60 com a
                  disponibilização das folhas de Letraset, que continham
                  passagens com Lorem Ipsum, e mais recentemente com os
                  programas de publicação como o Aldus PageMaker que incluem
                  versões do Lorem Ipsum.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CaseGridText;
