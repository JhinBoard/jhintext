import CloseIcon from '@mui/icons-material/Close';
import { MuiModal, styled } from '@toeverything/components/ui';
import JhinHero from './jhin-hero.png';
import { ModalContent } from './ModalContent';

interface ModalProps {
    open: boolean;
    onClose: () => void;
}

export const InfoModal = ({ open, onClose }: ModalProps) => {
    const currentYear = new Date().getFullYear();
    return (
        <MuiModal open={open} onClose={onClose}>
            <Container>
                <Header>
                    <HeaderLeft>
                        <StyledImg src={JhinHero} />
                        <LivedemoContainer>live demo</LivedemoContainer>
                    </HeaderLeft>
                    <CloseContainer onClick={() => onClose?.()}>
                        <CloseIcon />
                    </CloseContainer>
                </Header>
                <ModalContent />
                <Footer>Copyright &copy; 2022-{currentYear} JhinBoard</Footer>
            </Container>
        </MuiModal>
    );
};

const Container = styled('div')({
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '60%',
    maxWidth: '1000px',
    minWidth: '860px',
    borderRadius: '28px',
    backgroundColor: '#fff',
    padding: '48px 48px 40px 48px',

    '&:focus-visible': {
        outline: 0,
    },
});

const Header = styled('div')({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
});

const HeaderLeft = styled('div')({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
});

const StyledImg = styled('img')({
    height: '22px',
});

const LivedemoContainer = styled('span')(({ theme }) => ({
    display: 'inline-block',
    border: `1px solid ${theme.affine.palette.primary}`,
    color: theme.affine.palette.primary,
    fontSize: '16px',
    lineHeight: '22px',
    padding: '2px 10px',
    borderRadius: '10px',
    marginLeft: '18px',
}));

const CloseContainer = styled('div')(({ theme }) => ({
    cursor: 'pointer',
    width: '32px',
    height: '32px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '6px',

    '&:hover': {
        backgroundColor: '#EDF3FF',
    },
}));

const Footer = styled('div')(({ theme }) => ({
    textAlign: 'center',
    fontSize: '14px',
    lineHeight: '19px',
    color: theme.affine.palette.primaryText,
}));
