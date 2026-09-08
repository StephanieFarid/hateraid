import dayjs from 'dayjs';

export default function DateComponent() {
  // Format the current date or any date string
  const formattedDate = dayjs().format('MMM DD YYYY'); 
  // Output example: "Sep 08 2026"

  return (
    <div>
      <p>{formattedDate}</p>
    </div>
  );
}