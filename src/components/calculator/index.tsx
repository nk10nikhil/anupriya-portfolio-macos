import { CalcButton } from "./calc-button";
import { IconBackspace, IconPlusMinus } from "@tabler/icons-react";
import { VscPercentage } from "react-icons/vsc";
import {
  IconCalculator,
  IconDivide,
  IconEqual,
  IconMinus,
  IconPlus,
  IconX
} from "@tabler/icons-react";
import { useEffect, useRef, useState } from "react";
import { refineExp } from "~/utils";

export default function Calculator() {
  const [history, setHistory] = useState("");
  const [expression, setExpression] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const execute = refineExp(expression);
  const [mode, setMode] = useState<"typing" | "result">("result");

  const handlePress = (value: string) => {
    setMode("typing");
    setExpression((pre) => pre + value);
  };

  const onClear = () => {
    setHistory("");
    setExpression("");
  };

  const onBackspace = () => {
    if (expression.length >= 1) {
      setExpression((pre) => pre.slice(0, pre.length - 1));
    }
  };

  const onCalculate = () => {
    if (execute) {
      const temp = expression;
      try {
        setExpression(eval(execute));
        setHistory(temp);
        setMode("result");
      } catch (error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    if (inputRef.current) {
      if (mode === "typing") {
        inputRef.current.scrollLeft = inputRef.current.scrollWidth;
      } else {
        inputRef.current.scrollLeft = 0;
      }
    }
  }, [expression, mode]);

  return (
    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900">
      <div className="flex flex-col gap-4 p-6 bg-white/50 dark:bg-black/30 backdrop-blur-sm rounded-2xl shadow-2xl">
        {/* Display Section */}
        <div className="bg-white/80 dark:bg-gray-900/80 rounded-xl p-4 min-h-[100px] flex flex-col justify-end">
          <input
            value={history || ""}
            readOnly
            className="h-6 w-full !cursor-default overflow-hidden bg-transparent text-right text-sm text-gray-400 dark:text-gray-500 focus:outline-none"
            title="history"
          />
          <input
            ref={inputRef}
            value={expression || "0"}
            readOnly
            className="w-full !cursor-default overflow-x-auto bg-transparent text-right text-3xl font-light focus:outline-none dark:text-white text-gray-900"
            title="expression"
          />
        </div>

        {/* Button Grid */}
        <div className="grid grid-cols-4 gap-3">
          {/* Row 1 */}
          {mode === "typing" ? (
            <CalcButton onPress={onBackspace}>
              <IconBackspace stroke={2} />
            </CalcButton>
          ) : (
            <CalcButton onPress={onClear} label="AC" />
          )}
          <CalcButton
            onPress={() => {
              if (expression) {
                if (!Number.isNaN(Number(expression))) {
                  setExpression((-1 * Number(expression)).toString());
                }
              }
            }}
          >
            <IconPlusMinus stroke={2} />
          </CalcButton>
          <CalcButton
            onPress={() => {
              if (expression && !Number.isNaN(Number(expression))) {
                setExpression((Number(expression) / 100).toString());
              }
            }}
          >
            <VscPercentage className="text-2xl" />
          </CalcButton>
          <CalcButton
            onPress={() => {
              if (expression) {
                const last = expression[expression.length - 1];
                if (last !== "+" && last !== "-" && last !== "×" && last !== "÷") {
                  handlePress("÷");
                }
              }
            }}
            isHighlight
          >
            <IconDivide stroke={2} />
          </CalcButton>

          {/* Row 2 */}
          <CalcButton onPress={() => handlePress("7")} label="7" />
          <CalcButton onPress={() => handlePress("8")} label="8" />
          <CalcButton onPress={() => handlePress("9")} label="9" />
          <CalcButton
            onPress={() => {
              if (expression) {
                const last = expression[expression.length - 1];
                if (last !== "+" && last !== "-" && last !== "×" && last !== "÷") {
                  handlePress("×");
                }
              }
            }}
            isHighlight
          >
            <IconX stroke={2} />
          </CalcButton>

          {/* Row 3 */}
          <CalcButton onPress={() => handlePress("4")} label="4" />
          <CalcButton onPress={() => handlePress("5")} label="5" />
          <CalcButton onPress={() => handlePress("6")} label="6" />
          <CalcButton
            onPress={() => {
              if (expression) {
                const last = expression[expression.length - 1];
                if (last !== "-") {
                  handlePress("-");
                }
              } else handlePress("-");
            }}
            isHighlight
          >
            <IconMinus stroke={2} />
          </CalcButton>

          {/* Row 4 */}
          <CalcButton onPress={() => handlePress("1")} label="1" />
          <CalcButton onPress={() => handlePress("2")} label="2" />
          <CalcButton onPress={() => handlePress("3")} label="3" />
          <CalcButton
            onPress={() => {
              if (expression) {
                const last = expression[expression.length - 1];
                if (last !== "+" && last !== "×" && last !== "÷") {
                  handlePress("+");
                }
              }
            }}
            isHighlight
          >
            <IconPlus stroke={2} />
          </CalcButton>

          {/* Row 5 */}
          <CalcButton
            onPress={() => {
              setExpression("");
              setHistory("");
            }}
          >
            <IconCalculator stroke={2} />
          </CalcButton>
          <CalcButton
            onPress={() => {
              if (expression) {
                handlePress("0");
              }
            }}
            label="0"
          />
          <CalcButton
            onPress={() => {
              if (expression) {
                const last = expression[expression.length - 1];
                if (last === ".") return;
                if (last === "+" || last === "-" || last === "×" || last === "÷") {
                  handlePress("0.");
                } else handlePress(".");
              } else {
                handlePress("0.");
              }
            }}
            label="."
          />
          <CalcButton onPress={onCalculate} isHighlight>
            <IconEqual stroke={2} />
          </CalcButton>
        </div>
      </div>
    </div>
  );
}
