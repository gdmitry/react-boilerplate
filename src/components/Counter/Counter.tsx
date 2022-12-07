import React from 'react';

export function Counter({ name, id, dataTestId, maxLength, ref }: IProps) {
  // @ts-ignore
  return <input data-test-id={dataTestId} id={id} name={name} type="text" maxLength={maxLength} ref={ref} />;
}

export interface IProps {
  dataTestId: string;
  name: string;
  id: string;
  maxLength: number;
  ref: object;
}
