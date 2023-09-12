// eslint-disable-next-line react/prop-types
export default function CustomButton({ label, className, onClick }) {
  return (
    <button className={`rounded-lg ${className}`} onClick={onClick}>
      {label}
    </button>
  );
}
