import { useState } from "react";
import styles from './rating.module.css';
import { useForm, useController, Control, FieldValues, FieldError, ChangeHandler, RefCallBack, SetFieldValue } from 'react-hook-form';
// import { useForm, SubmitHandler, FieldValues } from 'react-hook-form';

type props = {
  onChange: (x: number) => void
  value: number | null;
  rules: any;
}

const Rating = ({ onChange, rules, value }: props) => {
  const { handleSubmit, control } = useForm<FieldValues>();

  const {
    fieldState: { error },
  } = useController({
    name: 'rating',
    control,
    rules,
    defaultValue: '',
  });

  return (
    <div className={styles.stars}>
      {[...Array(5)].map((_, i) => <>
        <span
          key={`${i}`}
          onClick={() => onChange(i + 1)}
          className={styles.star}
        >
          {i < (value || 0) ? '★' : '☆'}
        </span>
      </>
      )}
    </div>
  )
}

export default Rating;
