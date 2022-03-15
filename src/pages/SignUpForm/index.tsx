/* eslint-disable jsx-a11y/label-has-associated-control */
import { FiChevronLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.svg';
import Benefit from '../../components/Benefit';
import Form from '../../components/Form';
import { Container } from '../../style/global';
import {
  BackButton, SignUpFormContainer, SignUpFormContent, SignUpHeader
} from './sign-up-form.styles';

function SignUpForm() {
  return (
    <SignUpFormContainer>
      <Container>
        <SignUpHeader>
          <Link to="/">
            <img src={logo} alt="Indie Brew" />
          </Link>
          <BackButton>
            <Link to="/" className="back-button">
              <FiChevronLeft />
            </Link>
            <p>Back to homepage</p>
          </BackButton>
        </SignUpHeader>
        <SignUpFormContent>

          <div className="content">
            <h1 className="title">Create your personalized feed.</h1>

            <Benefit
              icon="🎈"
              titleText="Over 20 resources"
              text="With resources ranging from Reddit to IndieHackers, we've got all your needs covered"
            />

            <Benefit
              icon="🗞"
              titleText="Delivered weekly"
              text="Every week at exactly Tuesday 12:00P.M EST - expert a value-packed digest right in your email"
            />

            <Benefit
              icon="💡"
              titleText="Unlimited ideas"
              text="With all the ideas you'll be reading about. What's stopping you from creating a sustainable startup?"
            />

          </div>

          <div className="form">
            <h2 className="form-title">Create your IndieBrew Account</h2>
            <Form />
          </div>

        </SignUpFormContent>

      </Container>
    </SignUpFormContainer>
  );
}

export default SignUpForm;
