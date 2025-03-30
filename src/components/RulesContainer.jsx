import React, { useState, useMemo, useCallback } from "react";
import { RULES_CONFIG } from "../rulesConfig";
import RuleWrapper from "./RuleWrapper";

const RulesContainer = () => {
  const [rules, setRules] = useState([]);

  // Memoize rulesConfig to avoid re-computing on every render
  const rulesConfig = useMemo(() => RULES_CONFIG(), []);

  // Handle adding a new rule (prevents redundant calculations)
  const handleAddRule = useCallback(() => {
    const selectedRuleIds = rules.map((item) => item.id); // Get already selected rule IDs
    const filteredRule = rulesConfig.filter(
      (rule) => !selectedRuleIds.includes(rule.id) // Exclude already selected rules
    );
    if (filteredRule.length > 0) {
      setRules((prev) => [...prev, filteredRule[0]]); // Add first available rule
    }
  }, [rules, rulesConfig]);

  // Memoized function to delete a rule
  const deleteRule = useCallback(
    (rule_id) => {
      setRules((prevRules) => prevRules.filter((rule) => rule.id !== rule_id)); // Remove rule by ID
    },
    [setRules]
  );

  return (
    <div
      className="
    w-260 h-auto px-2.5 py-5
    border-2 border-black rounded-lg 
    bg-white 
    text-left text-xs font-medium
    "
    >
      <h4 className="text-sm font-bold my-2">Rule</h4>
      <p className="text-xs font-semibold my-3">
        The offer will be triggered based on the rules in the section
      </p>
      <hr />
      <p className="text-sm my-2">Show offer if</p>
      <div className="flex flex-col gap-4">
        {rules
          ?.sort((a, b) => a?.priority - b?.priority) // Sort rules by priority before rendering
          .map((rule, index) => {
            return (
              <div key={rule.id} className="flex flex-col gap-2">
                {" "}
                {/* Added key to prevent React warnings */}
                <RuleWrapper
                  rule={rule}
                  rules={rules}
                  setRules={setRules}
                  deleteRule={deleteRule}
                  ruleConfig={RULES_CONFIG()}
                />
              </div>
            );
          })}
      </div>

      {rules.length !== rulesConfig.length && ( // Show button only if rules are not exhausted
        <div className="flex justify-center items-center mt-2">
          <button
            className={`text-sm px-4 py-2 rounded transition 
    bg-blue-500 hover:bg-blue-600 text-black border-none focus:outline-none focus:ring-0`}
            onClick={handleAddRule}
            disabled={rules.length === RULES_CONFIG().length} // Disable button when all rules are added
          >
            + AND
          </button>
        </div>
      )}
    </div>
  );
};

export default RulesContainer;
