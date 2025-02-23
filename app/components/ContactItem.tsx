interface ContactItemProps {
  icon: React.ReactNode;
  text: string;
  href?: string;
<<<<<<< HEAD
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
=======
}

const ContactItem: React.FC<ContactItemProps> = ({ icon, text, href }) => (
  <div className="flex items-center space-x-2">
    {icon}
    {href ? (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-black hover:text-[#D84747] transition-colors"
      >
        {text}
      </a>
    ) : (
      <span>{text}</span>
    )}
  </div>
>>>>>>> 166d5ab49765598b8a795aee6fd3b191641a98b2
);

export default ContactItem;
