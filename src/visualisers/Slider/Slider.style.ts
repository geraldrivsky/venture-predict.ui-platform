import { Colors } from '../../Styles';
import { getRgbaFromHex } from '../../helpers';

export const getStyle = ({
  width,
  height,
  color,
  containerColor,
  currentValue,
  maxValue = 5,
  boxShadow,
}: any) => {
  const { VP_SCORE_RED, VP_GREEN, VP_SCORE_YELLOW, VP_SILVER } = Colors;

  let elementHeight = height ? `${height}px` : '6px';
  const activeBarLength = `${(currentValue / maxValue) * 100}%`;
  let colorLogic;

  if (maxValue === 100)
    colorLogic =
      currentValue < 50
        ? VP_SCORE_RED
        : currentValue === 100
        ? VP_GREEN
        : VP_SCORE_YELLOW;
  else
    colorLogic =
      currentValue < 2.5
        ? VP_SCORE_RED
        : currentValue >= 4
        ? VP_GREEN
        : VP_SCORE_YELLOW;

  return {
    slider: {
      position: 'relative' as 'relative',
      borderRadius: '5px',
      width: width ? `${width}px` : '100%',
      height: elementHeight,
      background: containerColor ? containerColor : VP_SILVER,
    },
    sliderChild: {
      boxShadow: boxShadow
        ? `0 0 4px ${getRgbaFromHex(colorLogic, 0.6)}`
        : 'none',
      borderRadius: '5px',
      position: 'absolute' as 'absolute',
      background: color ? color : colorLogic,
      height: '100%',
      width: activeBarLength,
    },
  };
};
