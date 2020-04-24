import { Colors } from '../../Styles';
import { getRgbaFromHex } from '../../helpers';

const { VP_GREY } = Colors;

interface GetStyle {
  (): any;
}

export const getStyle: GetStyle = () => ({
  btn: {
    display: 'flex',
    cursor: 'pointer',
    alignItems: 'center',
    width: '100%',
    marginRight: 'auto',
    marginLeft: 'auto',
    boxSizing: 'border-box',
    border: `1px solid ${getRgbaFromHex(VP_GREY, 0.5)}`,
    borderRadius: 16,
    padding: '15px',
  },
  svg: {
    marginRight: 5,
    flexShrink: '0',
  },
  span: {
    textTransform: 'uppercase',
    fontWeight: 'bold',
    letterSpacing: 1,
    color: VP_GREY,
    marginRight: 'auto',
    marginLeft: 'auto',
  },
});
