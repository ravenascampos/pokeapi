import React from "react";
import ButtonModal from "../Button/ButtonModal";
import { styled } from '@mui/system';
import ModalUnstyled from '@mui/base/ModalUnstyled';
import LocalGroceryStoreOutlinedIcon from '@mui/icons-material/LocalGroceryStoreOutlined';
import CloseIcon from '@mui/icons-material/Close';
import * as S from './StyleModal'

const StyledModal = styled(ModalUnstyled)`
  position: fixed;
  z-index: 1300;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Backdrop = styled('div')`
  z-index: -1;
  position: fixed;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  -webkit-tap-highlight-color: transparent;
`;


export function Modal(){
    
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return(
        <>
            <div>
                    <S.OpenModal type="button" onClick={handleOpen}>
                        Finalizar Compra
                    </S.OpenModal>
                    <StyledModal
                        aria-labelledby="unstyled-modal-title"
                        aria-describedby="unstyled-modal-description"
                        open={open}
                        onClose={handleClose}
                        BackdropComponent={Backdrop}
                    >
                        <S.Box>
                            <S.CloseModal>
                                <S.BtnCloseModal onClick={handleClose} ><CloseIcon /></S.BtnCloseModal>
                            </S.CloseModal>
                            <S.IconCart>
                                <LocalGroceryStoreOutlinedIcon sx={{ fontSize: 50 }} />
                            </S.IconCart>
                            <S.ContTexto>
                                <h2 id="unstyled-modal-title">Compra realizada com sucesso!</h2>
                                <S.ConteudoModal>
                                    <p id="unstyled-modal-description">Em breve você receberá um email com todos os detalhes.</p>
                                </S.ConteudoModal>
                            </S.ContTexto>
                            <S.ContBotao>
                                <ButtonModal/>
                            </S.ContBotao>
                        </S.Box>
                    </StyledModal>
            </div>
        </>
    );
}

export default Modal;