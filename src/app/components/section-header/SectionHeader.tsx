interface SectionHeaderProps {
  title: string;
  subtitle?: string;
}
const SectionHeader = ({ title, subtitle = "" }: SectionHeaderProps) => {
  return (
    <header className="text-blue-primary space-y-2">
      <h2 className="text-2xl font-medium">{title}</h2>

      {!!subtitle && <p>{subtitle}</p>}
    </header>
  );
};

export default SectionHeader;
