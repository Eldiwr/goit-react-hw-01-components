import PropTypes from 'prop-types';
import { Items } from './Item';
import { Title, St, StatsList } from './Stats.styled';

export const Statistics = ({title, stats}) => {
  return <St>
      {title && <Title>{title}</Title>}
  <StatsList>
            {stats.map(({id, label, percentage}) => (
                <Items
                    key={id}
                    label={label}
                    percentage={percentage}
                />
            ))}
  </StatsList>
</St>
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  }),
  ),
};