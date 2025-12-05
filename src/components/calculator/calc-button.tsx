export function CalcButton({
  onPress,
  label,
  isHighlight = false,
  children
}: {
  label?: string;
  children?: React.ReactNode;
  onPress?: () => void;
  isHighlight?: boolean;
}) {
  return (
    <button
      onClick={onPress}
      className={`
        size-14 rounded-full font-medium flex justify-center items-center text-xl
        transition-all duration-200 active:scale-95 
        shadow-lg hover:shadow-xl
        ${
          isHighlight
            ? "bg-gradient-to-br from-orange-400 to-orange-500 text-white hover:from-orange-500 hover:to-orange-600"
            : "bg-white/90 dark:bg-gray-700/90 text-gray-800 dark:text-white hover:bg-white dark:hover:bg-gray-600"
        }
      `}
    >
      {children ? children : label}
    </button>
  );
}
