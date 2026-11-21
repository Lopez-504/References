export default function FormattedText({ text='' }) {
  const parts = text.split(/(\*\*.*?\*\*)/g);

  return (
    <>
      {parts.map((part, index) => {
        if (part.startsWith("\*\*")) {
          return (
            <strong key={index}>
              {part.replace("\*\*", "").replace("\*\*", "")}
            </strong>
          );
        }
        return part;
      })}
    </>
  );
}