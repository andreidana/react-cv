import PropTypes from 'prop-types';

export type ParagraphProps = {
  innerText: string;
}

const Paragraph = (props: ParagraphProps) => (<p className="mt-2">{props.innerText}</p>);

Paragraph.propTypes = {
  innerText: PropTypes.string.isRequired,
};

export default Paragraph;
