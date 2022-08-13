import PropTypes from 'prop-types';
import { Item, LabelSpan, PercentageSpan } from "./Stats.styled";
import { randomColor } from "./Random";
export const Items = ({ label, percentage }) => {
    return <Item style={{backgroundColor: `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`,}}>
      <LabelSpan>{label}</LabelSpan>
      <PercentageSpan>{percentage}%</PercentageSpan>
</Item>
}

Items.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
}