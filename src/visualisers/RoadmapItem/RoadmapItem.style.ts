import { Colors } from '../../Styles';

interface types {
  status: { value: string };
}

export const getStyle = ({ status: { value: status } }: types) => {
  const { VP_GREY, VP_SUPER_DARK } = Colors;

  return {
    roadmapItemText: {
      marginLeft: 5,
      fontFamily: 'Titillium Web',
      fontSize: '0.6875rem',
      whiteSpace: 'nowrap' as 'nowrap',
      color: status === 'complete' ? VP_GREY : 'white',
    },
    roadmapItem: {
      display: 'flex',
      alignItems: 'center',
      padding: '5px 15px 5px 5px',
      background: VP_SUPER_DARK,
    },
  };
};
