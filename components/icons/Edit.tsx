export default function EditIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="20"
      height="20"
      fill="none"
      viewBox="0 0 20 20"
    >
      <path
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M7.533 9.15A1.823 1.823 0 007 10.438V13h2.578c.483 0 .947-.192 1.289-.534l7.6-7.604a1.823 1.823 0 000-2.577l-.751-.751a1.821 1.821 0 00-2.578 0L7.533 9.15z"
      ></path>
      <path
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M19 10c0 4.243 0 6.364-1.318 7.682C16.364 19 14.242 19 10 19c-4.243 0-6.364 0-7.682-1.318C1 16.364 1 14.242 1 10c0-4.243 0-6.364 1.318-7.682C3.636 1 5.758 1 10 1"
      ></path>
    </svg>
  );
}
