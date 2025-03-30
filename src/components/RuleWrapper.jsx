import RulesDropdown from "./RulesDropdown";
import OperatorsDropdown from "./OperatorsDropdown";
import ValueDropdown from "./ValueDropdown";
import Input from "./Input";
import { useCallback } from "react";

const RuleWrapper = ({ rule, rules, setRules, deleteRule, ruleConfig }) => {
  // Memoized delete function to avoid unnecessary re-renders
  const handleDelete = useCallback(
    () => deleteRule(rule.id),
    [deleteRule, rule.id]
  );

  return (
    <div className="flex gap-4 items-center">
      {/* 📜 Rule Icon */}
      <span className="text-center text-sm">📜</span>

      {/* Rule Selection Dropdown */}
      <RulesDropdown
        rules={rules}
        setRules={setRules}
        rule={rule}
        ruleConfig={ruleConfig}
      />

      {/* Conditionally render operator dropdown */}
      {rule?.operatorsDropdown?.display && (
        <OperatorsDropdown rule={rule} rules={rules} setRules={setRules} />
      )}

      {/* Conditionally render value dropdown */}
      {rule?.valueDropdown?.display && (
        <ValueDropdown rule={rule} rules={rules} setRules={setRules} />
      )}

      {/* Conditionally render currency input */}
      {rule?.currencyInput?.display && (
        <Input currency="USD" rules={rules} setRules={setRules} rule={rule} />
      )}

      {/* Conditionally render normal input */}
      {rule?.input?.display && (
        <Input rules={rules} setRules={setRules} rule={rule} />
      )}

      {/* ❌ Delete Button */}
      <i
        className="fa fa-close outline-none focus:outline-none cursor-pointer"
        style={{
          fontSize: "18px",
          color: "#D3D3D3",
        }}
        onClick={handleDelete}
      ></i>
    </div>
  );
};

export default RuleWrapper;
