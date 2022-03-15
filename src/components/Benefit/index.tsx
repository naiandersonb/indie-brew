import { BenefitContainer, Text } from './benefits.styles';

type BenefitTypes = {
  icon: string;
  titleText: string;
  text: string;
}

function Benefit({ icon, titleText, text }: BenefitTypes) {
  return (
    <BenefitContainer>
      <span className="icon">{icon}</span>
      <Text>
        <p><span>{titleText}.</span> {text}.</p>
      </Text>
    </BenefitContainer>
  );
}

export default Benefit;
