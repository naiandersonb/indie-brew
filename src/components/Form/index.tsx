/* eslint-disable jsx-a11y/label-has-associated-control */
import { Link } from 'react-router-dom';
import Input from '../Input';
import { FormContainer, SubmitButton } from './form.styles';

function Form() {
  return (
    <FormContainer>
      <div className="input-group">
        <label htmlFor="email">Email</label>
        <Input type="email" name="email" placeholder="john@example.com" />
      </div>
      <div className="input-group">
        <label htmlFor="full_name">Full Name</label>
        <Input type="text" name="ull_name" placeholder="John Doe" />
      </div>

      <div className="input-group">
        <label htmlFor="password">Password</label>
        <Input type="password" name="password" placeholder="At least 8 characters" />
      </div>

      <div className="input-checkbox-group">
        <Input type="checkbox" name="terms" />
        <label htmlFor="terms">By creating an account on IndieBrew, you agree to the <Link to="/terms">Terms & Conditions</Link>.</label>
      </div>

      <SubmitButton type="submit">Create an Account</SubmitButton>
    </FormContainer>
  );
}

export default Form;
