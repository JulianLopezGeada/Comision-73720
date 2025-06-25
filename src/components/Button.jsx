function Button({ text }) {
  return (
    <button className="transition duration-300 ease-in-out hover:scale-105 dark:shadow-car rounded-lg p-3 font-bold bg-blue-800 text-white hover:bg-blue-700  dark:bg-blue-400 dark:hover:bg-blue-300 cursor-pointer">
      {text}
    </button>
  );
}

export default Button;
