import React, { useMemo, useCallback } from "react";
import Select from "react-select";
import { DROP_DOWN_STYLE } from "../constants";

const RulesDropdown = ({ rules, setRules, rule, ruleConfig }) => {
  // Memoizing addedRuleIds to prevent unnecessary re-computation
  const addedRuleIds = useMemo(
    () => new Set(rules?.map(({ id }) => id)), // Convert rule IDs to Set for quick lookup
    [rules]
  );

  // Memoizing options to avoid re-creating them on each render
  const options = useMemo(
    () =>
      ruleConfig
        ?.filter(({ id }) => !addedRuleIds.has(id)) // Filter out already added rules
        .map(({ name, id }) => ({ label: name, value: id })), // Convert to dropdown format
    [ruleConfig, addedRuleIds]
  );

  // Memoized function to update selected rule
  const handleChange = useCallback(
    (newValue, rule_id) => {
      setRules((prevRules) =>
        prevRules.map((rule) =>
          rule.id === rule_id
            ? ruleConfig.find((r) => r.id === newValue?.value) // Find and replace selected rule
            : rule
        )
      );
    },
    [setRules, ruleConfig]
  );

  // Find the current rule in rules array
  const foundPresentRule = rules?.find(({ id }) => rule.id === id);

  // Set the value for the dropdown
  const value = foundPresentRule
    ? { label: foundPresentRule.name, value: foundPresentRule.id }
    : null;

  return (
    <div className="w-full">
      <Select
        options={options}
        styles={{ ...DROP_DOWN_STYLE }} // Apply custom styles
        value={value} // Controlled value
        onChange={(e) => handleChange(e, rule?.id)} // Handle dropdown selection
      />
    </div>
  );
};

export default RulesDropdown;
