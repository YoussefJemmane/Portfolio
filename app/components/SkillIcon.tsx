type IconComponent = React.ComponentType<React.SVGProps<SVGSVGElement>>;
interface SkillIconProps {
  Icon: IconComponent;
}
const SkillIcon: React.FC<SkillIconProps> = ({ Icon }) => (
  <div className="flex flex-col items-center mx-4">
    <Icon className="w-[100px] h-[100px] grayscale hover:[#386FA4]" />
  </div>
);

export default SkillIcon;
