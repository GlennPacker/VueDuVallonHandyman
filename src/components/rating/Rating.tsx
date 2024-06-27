import styles from './rating.module.css';
import { useForm, useController, FieldValues } from 'react-hook-form';

type props = {
  onChange: (x: number) => void
  value: number | null;
  rules: any;
}

const keyArray = [
  { key: 1 },
  { key: 2 },
  { key: 3 },
  { key: 4 },
  { key: 5 }
]

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
      {keyArray.map((i) => <>
        <span
          key={`a${i.key}`}
          onClick={() => onChange(i.key)}
          className={styles.star}
        >
          {i.key < (value || 0) ? '★' : '☆'}
        </span>
      </>
      )}
    </div>
  )
}

export default Rating;
