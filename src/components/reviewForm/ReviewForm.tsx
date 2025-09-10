'use client';
import { Form, Button } from "react-bootstrap";
import { ContactFormModel } from '@/types/contactFormModel';
import { useForm, FieldErrors } from 'react-hook-form'
import React from "react";
import { sendEmail } from "@/services/emailService";
import { ReviewFormModel } from "@/types/reviewFormModel";
import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation'
import Rating from "../rating/Rating";
import { Suspense } from 'react'

const ReviewForm = () => {
  const searchParams = useSearchParams();
  const gardening = searchParams.get('gardening');
  const generalMaintenance = searchParams.get('generalMaintenance');
  const gutters = searchParams.get('gutters');
  const powerWashing = searchParams.get('powerWashing');
  const repointing = searchParams.get('repointing');
  const strimming = searchParams.get('strimming');
  const tiling = searchParams.get('tiling');
  const painting = searchParams.get('painting');
  const name = searchParams.get('name');

  const other = searchParams.get('other');
  let pleaseSpecify: string | null = '';
  if (other) pleaseSpecify = searchParams.get('pleaseSpecify');

  const initState: ReviewFormModel = {
    department: "Haute Vienne", 
    town: null,
    id: 0,
    gardening: false,
    generalMaintenance: false,
    message: '',
    name: '',
    other: false,
    pleaseSpecify: '',
    powerWashing: false,
    rating: null,
    repointing: false,
    strimming: false,
    title: '',
    valueForMoney: null,
    wouldYouUseThemAgain: 'Yes',
    gutters: false,
    tiling: false,
    painting: false,
  };

  const [initialValues, setInitialValues] = useState(initState);
  const [sent, setSent] = useState(false);
  const [apiError, setApiError] = useState(false);

  const {
    register,
    handleSubmit,
    getValues,
    setValue,
    setError,
    clearErrors,
    watch,
    formState: { errors }
  } = useForm({
    mode: "onTouched",
    reValidateMode: "onSubmit",
    // reValidateMode: "onChange",
    defaultValues: initialValues
  });

  useEffect(() => {
    setValue('wouldYouUseThemAgain', 'Yes');
    if (name) {
      setValue('name', name);
    }
    if (gardening) {
      setValue('gardening', true);
    }
    if (generalMaintenance) {
      setValue('generalMaintenance', true);
    }
    if (powerWashing) {
      setValue('powerWashing', true);
    }
    if (repointing) {
      setValue('repointing', true);
    }
    if (strimming) {
      setValue('strimming', true);
      setValue('gardening', true);
    }
    if (gutters) {
      setValue('gutters', true)
    }
    if (tiling) {
      setValue('tiling', true)
    }
    if (painting) {
      setValue('painting', true)
    }
  }, []);

  const onSubmit = (data: ReviewFormModel) => {
    let errors = false;

    data.id = Math.round(((new Date()).getTime() - 1718515035463) / 1000 / 60);

    if (!data.rating) {
      setError('rating', { type: 'min', message: 'Rating is required' })
      errors = true;
    }

    if (!data.valueForMoney) {
      setError('valueForMoney', { type: 'min', message: 'Value for money is required' })
      errors = true;
    }

    // typescript failure workaround
    if (!data.wouldYouUseThemAgain || !['Yes', 'No'].includes(data.wouldYouUseThemAgain)) {
      setError('wouldYouUseThemAgain', { type: 'required', message: `'Would You Use Them Again' is required` })
      errors = true;
    }

    if (errors) return;

    try {
      sendEmail(data);
      setSent(true);
    } catch {
      setApiError(true);
    }
  }

  const clearErrorsAndSet = (field: string, val: number | string) => {
    const f = field as keyof (ReviewFormModel);
    clearErrors(f);
    setValue(f, val);
  }

  const onError = (error: FieldErrors<ContactFormModel>) => {
    console.log("ERROR:::", error);
  };

  watch('rating');
  watch('valueForMoney');
  watch('rating');
  if (apiError) {
    return (
      <div className="text-danger">
        We could not process your review at this time. Please try again later.
      </div>
    )
  }

  if (sent) {
    return (
      <>Thank you, it is most appreciated.</>
    )
  }

  return (
    <Suspense>
      <Form onSubmit={handleSubmit(onSubmit, onError)}>
        <Form.Group className="mb-3" controlId="rating">
          <Form.Label>
            How would you rate your experience with Vue Du Vallon Handyman?
          </Form.Label>
          <Rating
            value={getValues('rating')}
            onChange={i => clearErrorsAndSet('rating', i)}
            rules={{
              required: "Rating is required",
              min: 1
            }}
          />

          {errors.rating && (
            <Form.Text className="text-danger">
              Rating is required
            </Form.Text>
          )}
        </Form.Group>

        <Form.Group className="mb-3" controlId="valueForMoney">
          <Form.Label>
            How would you rate the value for money when using Vue Du Vallon Handyman?
          </Form.Label>
          <Rating
            value={getValues('valueForMoney')}
            onChange={i => clearErrorsAndSet('valueForMoney', i)}
            rules={{
              required: "Value for money is required",
              min: 1,
            }}
          />

          {errors.valueForMoney && (
            <Form.Text className="text-danger">
              {errors.valueForMoney.message}
            </Form.Text>
          )}
        </Form.Group>

        <Form.Group className="mb-3" controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control
            placeholder="Name"
            {...register("name", { required: "Name is required" })}
          />
          {errors.name && (
            <Form.Text className="text-danger">
              {errors.name.message}
            </Form.Text>
          )}
        </Form.Group>

        <Form.Group className="mb-3" controlId="town">
          <Form.Label>Nearest Town</Form.Label>
          <Form.Control
            placeholder="Town"
            {...register("town", { required: "Town is required" })}
          />
          {errors.town && (
            <Form.Text className="text-danger">
              {errors.town.message}
            </Form.Text>
          )}  
        </Form.Group>

        <Form.Group className="mb-3" controlId="department">
          <Form.Label>Department</Form.Label>
          <Form.Select {...register("department", { required: "Department is required" })}>
            <option value="Charente">Charente</option>
            <option value="Creuse">Creuse</option>
            <option value="Haute Vienne">Haute Vienne</option>
            <option value="Indre">Indre</option>
          </Form.Select>
          {errors.department && (
            <Form.Text className="text-danger">
              {errors.department.message}
            </Form.Text>
          )}
        </Form.Group>

        <Form.Group className="mb-3" controlId="title">
          <Form.Label>Title your review</Form.Label>
          <Form.Control
            type="text"
            placeholder="Title"
            {...register("title")}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="message">
          <Form.Label>Write your review</Form.Label>
          <Form.Control
            placeholder="Message"
            as="textarea"
            rows={3}
            {...register("message")}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="wouldYouUseThemAgain">
          <Form.Label>Would you use Vue Du Vallon Handyman again</Form.Label>
          <div>
            <Form.Check
              onChange={i => clearErrorsAndSet('wouldYouUseThemAgain', i.target.checked ? 'Yes' : 'No')}
              inline
              label="Yes"
              name="wouldYouUseThemAgain"
              type="radio"
              value="Yes"
              id="yes"
              defaultChecked
            />
            <Form.Check
              inline
              onChange={i => clearErrorsAndSet('wouldYouUseThemAgain', i.target.checked ? 'No' : 'Yes')}
              label="No"
              value="No"
              name="wouldYouUseThemAgain"
              type="radio"
              id="no"
            />
          </div>

          {errors.wouldYouUseThemAgain && (
            <Form.Text className="text-danger">
              {errors.wouldYouUseThemAgain.message}
            </Form.Text>
          )}

        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Suspense>
  );
};

export default ReviewForm;