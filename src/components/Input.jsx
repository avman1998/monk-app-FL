import { useCallback } from "react";

const Input = ({ currency = "", rules, setRules, rule }) => {
  // useCallback to memoize handleChange, preventing unnecessary re-creations
  const handleChange = useCallback(
    (e, rule_id) => {
      const newValue = e.target.value;
      setRules((prev) => {
        return prev.map((rule) =>
          rule.id === rule_id
            ? {
                ...rule,
                ...(currency
                  ? {
                      // Update currencyInput value if currency exists
                      currencyInput: {
                        ...rule.currencyInput,
                        value: newValue,
                      },
                    }
                  : {
                      // Update normal input value if no currency
                      input: {
                        ...rule.input,
                        value: newValue,
                      },
                    }),
              }
            : rule
        );
      });
    },
    [setRules, currency] // Dependencies ensure function updates correctly
  );

  return (
    <div className="flex w-full">
      {currency ? (
        <div
          className="min-h-[38px] 
        border-1 border-solid border-r-0 flex justify-center items-center rounded-[9px] rounded-tr-none rounded-br-none bg-[rgb(226,226,226)] px-2"
        >
          {currency} {/* Currency prefix box */}
        </div>
      ) : null}

      <input
        type={currency ? "number" : "text"} // Number input if currency exists, else text
        className={`min-h-[38px] w-full
        border-1 border-solid
        rounded-[9px]  ${
          currency
            ? "border-black border-l-0 rounded-tl-none rounded-bl-none"
            : ""
        }
        outline-none focus:outline-none
        flex items-center justify-between flex-wrap
        bg-[hsl(0, 0%, 100%)]
        py-[6px] px-2`}
        value={rule?.[`${currency ? "currencyInput" : "input"}`]?.value} // Handles both currency and normal input values
        onChange={(e) => handleChange(e, rule?.id)} // Calls memoized handleChange
      />
    </div>
  );
};

export default Input;
