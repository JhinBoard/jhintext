import GitHubIcon from '@mui/icons-material/GitHub';
import { LogoIcon } from '@toeverything/components/icons';

import { styled } from '@toeverything/components/ui';

export const ModalContent = () => {
    return (
        <Container>
            <LeftContainer>
                <LeftButtonContainer
                    href="https://github.com/JhinBoard"
                    target="_blank"
                >
                    <LeftLogoIcon />
                    <LeftButtonText>Official Website Jhin.pro</LeftButtonText>
                </LeftButtonContainer>
            </LeftContainer>
        </Container>
    );
};

const Container = styled('div')({
    margin: '80px 0 100px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
});

const RightContainer = styled('div')({
    paddingRight: '132px',
});

const LeftContainer = styled('div')`
    padding-left: 120px;

    &::before {
        content: '';
        position: absolute;
        z-index: -1;
        left: 158px;
        display: block;
        width: 122px;
        height: 122px;
        background-color: #dda82a;
        opacity: 0.45;
        filter: blur(78px);
    }

    &::after {
        content: '';
        position: absolute;
        z-index: -1;
        top: 330px;
        left: 280px;
        display: block;
        width: 122px;
        height: 122px;
        background-color: #4461f2;
        filter: blur(78px);
    }
`;

// const LeftContainer = styled('div')({
//     paddingLeft: '132px',

//     '&::before': {
//         content: '*',
//         display: 'block',
//         width: '122px',
//         height: '122px',
//         backgroundColor: '#dda82a',
//         opacity: 0.45,
//         filter: 'blur(78px)',
//     },
// });

const LeftButtonContainer = styled('a')(({ theme }) => ({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    color: theme.affine.palette.primary,
    height: '110px',
    cursor: 'pointer',
    padding: '6px 24px 6px 28px',
    borderRadius: '10px',
    textDecoration: 'none',

    '&:hover': {
        backgroundColor: 'rgba(68, 97, 242, 0.1)',
    },

    '& + &': {
        marginTop: '50px',
    },
}));

const LeftGithubIcon = styled(GitHubIcon)({
    fontSize: '50px !important',
    cursor: 'pointer',
});

const LeftLogoIcon = styled(LogoIcon)({
    fontSize: '50px !important',
    cursor: 'pointer',
});

const LeftButtonText = styled('span')({
    color: '#000',
    fontSize: '24px',
    lineHeight: '36px',
    // width: '180px',
    marginLeft: '40px',
    cursor: 'pointer',
});

const RightTitle = styled('div')({
    paddingLeft: '24px',
    marginBottom: '24px',
    fontSize: '18px',
    lineHeight: '25px',
    color: '#000',
});

const Button = styled('a')(({ theme }) => ({
    cursor: 'pointer',
    padding: '6px 24px',
    fontSize: '18px',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: '10px',
    color: theme.affine.palette.primary,
    textDecoration: 'none',

    '&:hover': {
        backgroundColor: '#EDF3FF',
    },

    '& + &': {
        marginTop: '8px',
    },
}));

const ButtonText = styled('span')(({ theme }) => ({
    marginLeft: '30px',
    color: '#000100',
}));
