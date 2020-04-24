import { Colors } from '../../Styles';

interface Types {
  color: { value: string };
}

export const getStyle = ({ color }: Types) => ({
  colorScore: {
    width: 20,
    height: 6,
    opacity: 0.5,
    borderRadius: 3,
    backgroundColor: color ? color.value : Colors.VP_GREY
  }
})