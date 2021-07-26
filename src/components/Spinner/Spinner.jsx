import GridLoader from 'react-spinners/GridLoader';

const styles = {
  position: 'absolute',
  display: 'block',
  margin: '0 auto',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  borderColor: '#8cc054'
};

const Spinner = () => {
  return (
    <div>
      <GridLoader color={'#8cc054'} css={styles} />
    </div>
  );
};

export default Spinner;
