/** PropTypes for documentation purpose (not tested yet) */
import PropTypes from 'prop-types';
const fieldProps = {
  //
  defaultValue: PropTypes.any,
  help: PropTypes.string,
  description: PropTypes.string,
  // initial fields
  name: PropTypes.string,
  datatype: PropTypes.any, // ?
  layout: PropTypes.any, // string?
  input: PropTypes.any, // string, function, undefined
  options: PropTypes.object,
  intlInput: PropTypes.object,
  // path relative to the main object
  // e.g phoneNumbers.0.value
  path: PropTypes.string,
  // permissions
  disabled: PropTypes.boolean,
  // if it has an array field
  // e.g addresses.$ : { type: .... }
  arrayFieldSchema: PropTypes.object,
  arrayField: fieldProps,
  // if it is a nested object itself
  // eg address : { type : { ... }}
  nestedSchema: PropTypes.object,
  nestedInput: PropTypes.boolean, // flag
  nestedFields: PropTypes.arrayOf(fieldProps)
};
const groupProps = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  order: PropTypes.number,
  fields: PropTypes.arrayOf(PropTypes.shape(fieldProps))
};
