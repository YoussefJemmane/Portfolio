type IconComponent = React.ComponentType<React.SVGProps<SVGSVGElement>>;
interface SkillIconProps {
  Icon: IconComponent;
}
const SkillIcon: React.FC<SkillIconProps> = ({ Icon }) => (
  <div className="flex flex-col items-center mx-4">
<<<<<<< HEAD
    <Icon className="w-[100px] h-[100px] grayscale hover:[#386FA4]" />
=======
    <Icon className="w-[100px] h-[100px] grayscale" />
>>>>>>> 166d5ab49765598b8a795aee6fd3b191641a98b2
  </div>
);

export default SkillIcon;
