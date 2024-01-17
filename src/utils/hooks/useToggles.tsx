import {useState} from 'react';

function useToggle(defaultValue: boolean) {
  const [value, setValue] = useState(defaultValue);

  function toggleValue(value: boolean) {
    setValue((currentValue: boolean) =>
      typeof value === 'boolean' ? value : !currentValue,
    );
  }

  return [value, toggleValue];
}
export default useToggle;
