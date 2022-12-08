import React from 'react';

export function Input({ className, name, id, dataTestId, maxLength, onChange }: IProps) {
  // @ts-ignore
  return (
    <input
      data-test-id={dataTestId}
      id={id}
      className={className}
      name={name}
      type="text"
      maxLength={maxLength}
      onChange={(e) => {
        e.preventDefault();
        onChange(e.target.value);
      }}
    />
  );
}

export interface IProps {
  onChange?: (v: String) => {};
  dataTestId?: string;
  className?: string;
  name?: string;
  id?: string;
  maxLength?: number;
  // ref: object; // Consider cases when it can be used
}
