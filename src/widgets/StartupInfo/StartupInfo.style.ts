import { Colors } from '../../Styles';
import { getRgbaFromHex } from '../../helpers';

const { VP_DARK, VP_CRIMSON } = Colors;

interface GetStyle {
  (): any;
}

export const getStyle: GetStyle = () => ({
  blackSpan: {
    fontSize: '0.5rem',
    letterSpacing: 1,
    color: VP_DARK,
  },
  redSpan: {
    fontSize: '0.5rem',
    letterSpacing: 1,
    color: VP_CRIMSON,
  },
  startupFace: {
    width: '100%',
    wordBreak: 'break-word',
    display: 'flex',
    margin: 'initial',
    alignItems: 'center',
  },
  span: {
    marginTop: 5,
    fontSize: '0.5rem',
    color: '#333333',
    opacity: 0.4,
  },
  startupDescr: {
    display: 'flex',
    flexDirection: 'column',
  },
  feedback: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '8px',
    padding: '0 10px',
    height: '1.4625rem',
    backgroundColor: getRgbaFromHex('#E1E1E1', 0.2),
  },
  img: {
    position: 'relative',
    alignSelf: 'flex-start',
    marginRight: 10,
    width: 32,
    height: 32,
    gridRow: 'span 2',
    boxShadow: '1px 3px 5px rgba(147, 147, 147, 0.5)',
    borderRadius: '8px',
  },
  lastUpdatedSpan: {
    color: VP_DARK,
    letterSpacing: 1,
    opacity: 0.8,
    fontSize: '0.4375rem',
    borderRadius: '8px',
    padding: '0 12px',
    height: '1.4625rem',
    lineHeight: '1.4625rem',
    backgroundColor: getRgbaFromHex('#E1E1E1', 0.2),
  },
});
