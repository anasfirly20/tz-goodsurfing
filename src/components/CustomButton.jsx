// eslint-disable-next-line react/prop-types
export default function CustomButton({ label, className, onClick }) {
  return (
    <button
      className={`rounded-lg active:opacity-80 ${className}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
}
