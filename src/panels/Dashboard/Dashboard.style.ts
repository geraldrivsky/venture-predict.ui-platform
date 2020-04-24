import { Colors } from '../../Styles';

const { VP_GREEN, VP_GREY } = Colors;

interface GetStyle {
  (activeNavItemIndex: number): any;
}

export let getStyle: GetStyle = (activeNavItemIndex) => {
  return {
    parent: {
      display: 'flex',
      flexDirection: 'column',
    },
    getSvgColor(i: number) {
      return i === activeNavItemIndex ? VP_GREEN : VP_GREY;
    },
    ul: {
      marginTop: 'auto',
      padding: '10px 20px 5px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      boxShadow: '0px -4px 32px rgba(0, 0, 0, 0.12)',
    },
    li(i: number) {
      return {
        position: 'relative',
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        color: i === activeNavItemIndex ? VP_GREEN : VP_GREY,
      };
    },
    sup: {
      position: 'absolute',
      top: -2,
      lineHeight: 1,
      left: 'calc(50% + 15px)',
    },
    navSpan: {
      letterSpacing: 0.5,
      whiteSpace: 'nowrap',
      marginTop: 10,
      textTransform: 'uppercase',
    },
    top: {
      display: 'flex',
      alignItems: 'center',
      padding: '0 10px',
    },
    grid: {
      display: 'grid',
      padding: '0 10px',
      gridTemplateColumns: '3fr repeat(3, 1fr)',
      justifyItems: 'center',
    },
    table: {
      overflowY: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      padding: '20px 15px 0',
    },
    topSearch: {
      cursor: 'pointer',
      marginLeft: 'auto',
    },
    firstSpan: {
      height: 14,
      width: 18,
      position: 'relative',
      justifySelf: 'left',
    },
    firstSpanMiddle: {
      backgroundColor: '#454545',
      width: 10,
      height: 2,
      position: 'absolute',
      top: 'calc(50% + 2px)',
      left: '50%',
      transform: 'translate(-50%, -50%)',
    },
    firstSpanTop: {
      width: 16,
      height: 2,
      backgroundColor: '#454545',
      position: 'absolute',
      left: '50%',
      top: 2,
      transform: 'translateX(-50%)',
    },
    firstSpanBottom: {
      width: 4,
      height: 2,
      backgroundColor: '#454545',
      position: 'absolute',
      left: '50%',
      bottom: -2,
      transform: 'translateX(-50%)',
    },
    btn: {
      marginBottom: 20,
    },
    labelSpan: {
      textAlign: 'center',
      margin: '55px 0 20px',
    },
    btns: {
      flexGrow: 1,
      display: 'flex',
      flexDirection: 'column',
      paddingTop: 60,
    },
    lastBtn: {
      marginTop: 'auto',
      marginBottom: 40,
    },
    moreWrap: {
      flexGrow: 1,
      display: 'flex',
      flexDirection: 'column',
      padding: '20px 15px 0',
    },
    topTitle: {
      marginRight: 10,
    },
  };
};
