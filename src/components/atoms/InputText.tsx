import React from 'react'
import { Input } from '@chakra-ui/react'

type Props = {
  value: string;
  placeholder: string;
  onChange: (e: any) => void;
}

export const InputText = (props: Props) => {
  const {value, placeholder, onChange} = props;
  return (
    <Input
      borderRadius={10}
      type="text"
      value={value}
      placeholder={placeholder}
      onChange={onChange}
    ></Input>
  )
}

