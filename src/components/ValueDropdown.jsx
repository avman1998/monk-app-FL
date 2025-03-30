import React, { useCallback, useMemo } from "react";
import Select from "react-select";
import { DROP_DOWN_STYLE } from "../constants";

const ValueDropdown = ({ rule, rules, setRules }) => {
  // Memoized dropdown options
  const options = useMemo(() => {
    return (
      rule?.valueDropdown?.values?.map((item) => ({
        value: item,
        label: item,
      })) || []
    );
  }, [rule?.valueDropdown?.values]);

  // Memoized selected values
  const value = useMemo(() => {
    return (
      rule?.valueDropdown?.selectedValues?.map((item) => ({
        label: item,
        value: item,
      })) || []
    );
  }, [rule?.valueDropdown?.selectedValues]);

  // Optimized handleChange function
  const handleChange = useCallback(
    (newValue) => {
      setRules((prev) =>
        prev.map((r) =>
          r.id === rule.id
            ? {
                ...r,
                valueDropdown: {
                  ...r.valueDropdown,
                  selectedValues: newValue?.map((v) => v.value) || [],
                },
              }
            : r
        )
      );
    },
    [setRules, rule.id]
  );

  return (
    <div className="w-full">
      <Select
        options={options}
        isMulti
        value={value}
        onChange={handleChange}
        styles={DROP_DOWN_STYLE}
        placeholder={rule?.valueDropdown?.placeholder || "Select values"}
      />
    </div>
  );
};

export default ValueDropdown;
