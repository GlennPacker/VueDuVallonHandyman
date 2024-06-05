import styles from './rating.module.css';
import { useForm, useController, FieldValues } from 'react-hook-form';

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
      {[...Array(5)].map((a, i) => <>
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
