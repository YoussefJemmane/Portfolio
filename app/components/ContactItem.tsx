interface ContactItemProps {
  icon: React.ReactNode;
  text: string;
  href?: string;
  className?: string;
}

const ContactItem: React.FC<ContactItemProps> = ({ icon, text, href,className }) => (
  <div className={`flex items-center space-x-2 ${className}`}>
  {icon}
  {href ? (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-black dark:text-gray-300 hover:text-[#386FA4] dark:hover:text-[#60A5FA] transition-colors"
    >
      {text}
    </a>
  ) : (
    <span className="text-black dark:text-gray-300">{text}</span>
  )}
</div>
);

export default ContactItem;
