import { Colors } from '../../Styles';
import { getRgbaFromHex } from '../../helpers';

type Types = {
  currentValue: number;
  currentValueColor?: string;
  haveBox?: boolean;
  maxValueColor?: string;
  boxColor?: string;
};

export const getStyle = ({
  currentValue,
  currentValueColor,
  haveBox,
  maxValueColor,
  boxColor,
}: Types) => {
  const { VP_GREEN, VP_SCORE_YELLOW, VP_RED, VP_SUPER_DARK, VP_GREY } = Colors;
  let numScoreBgColor;

  if (haveBox) {
    if (haveBox) {
      if (boxColor && boxColor) numScoreBgColor = boxColor;
      else if (currentValue >= 4) numScoreBgColor = VP_GREEN;
      else if (currentValue < 2.5) numScoreBgColor = VP_RED;
      else numScoreBgColor = VP_SCORE_YELLOW;
    } else numScoreBgColor = 'gray';
  } else numScoreBgColor = 'none';

  return {
    numScore: {
      whiteSpace: 'nowrap' as 'nowrap',
      borderRadius: 15,
      fontSize: '0.8125rem',
      backgroundColor: numScoreBgColor,
      boxShadow:
        numScoreBgColor && `0 0 4px ${getRgbaFromHex(numScoreBgColor, 0.6)}`,
      display: 'inline-block',
      padding: haveBox ? '5px 10px': '',
      letterSpacing: 1,
    },
    currentValueText: {
      color: currentValueColor ? currentValueColor : VP_SUPER_DARK,
    },
    maxValueText: {
      color: maxValueColor ? maxValueColor : VP_GREY,
    },
  };
};
