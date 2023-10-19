import classNames from "classnames";

type SelectProps = React.SelectHTMLAttributes<HTMLSelectElement> & {
  emptyValue?: string;
  emptyName?: string;
  items: TSelectItem[];
};

export type TSelectItem = React.OptionHTMLAttributes<HTMLOptionElement> & {
  id: string;
  name: string;
  value?: string;
};

const Select: React.FC<SelectProps> = ({
  className,
  emptyValue,
  emptyName,
  items,
  ...rest
}: SelectProps) => {
  return (
    <select
      className={classNames("select select-bordered mb-4", className)}
      {...rest}
    >
      {emptyValue && emptyName && (
        <option value={emptyValue}>{emptyName}</option>
      )}
      {items.map(({ id, name, value, ...rest }) => (
        <option key={id} value={value || name}>
          {name}
        </option>
      ))}
    </select>
  );
};

export default Select;
