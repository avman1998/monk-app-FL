import React, { useMemo } from "react";
import Select from "react-select";
import { DROP_DOWN_STYLE } from "../constants";

const OperatorsDropdown = ({ rule, rules, setRules }) => {
  // Memoize filtered operator options based on `exclusive_with` logic
  const calculatingFinalOperators = useMemo(() => {
    const relatedRuleId = rule.hasOwnProperty("exclusive_with")
      ? rule?.exclusive_with
      : null; // Check if the rule has an `exclusive_with` property

    const selectedOperator = relatedRuleId
      ? rules?.find(({ id }) => id === relatedRuleId)?.operatorsDropdown
          ?.selectedValue // Find selected operator of the exclusive rule
      : null;

    return rule?.operatorsDropdown?.values
      ?.filter((op) => op !== selectedOperator) // Exclude the selected operator if exclusive
      .map((op) => ({ label: op, value: op }));
  }, [rule, rules]); // Dependencies ensure recalculation when rules change

  function handleChange(newValue, rule_id) {
    setRules((prev) => {
      return prev.map((rule) =>
        rule.id === rule_id
          ? {
              ...rule,
              operatorsDropdown: {
                ...rule.operatorsDropdown,
                selectedValue: newValue?.label, // Update selected operator
              },
            }
          : rule
      );
    });
  }

  const value = {
    label: rule?.operatorsDropdown?.selectedValue,
    value: rule?.operatorsDropdown?.selectedValue,
  }; // Preserve selected operator in dropdown

  return (
    <div className="w-full">
      <Select
        options={calculatingFinalOperators} // Render only allowed operators
        styles={{ ...DROP_DOWN_STYLE }}
        value={value}
        onChange={(e) => handleChange(e, rule.id)} // Handle dropdown selection
      />
    </div>
  );
};

export default OperatorsDropdown;
