'use client';
import { Form, Button } from "react-bootstrap";
import { ContactFormModel } from '@/types/contactFormModel';
import { useForm, FieldErrors, useController } from 'react-hook-form'
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
  const powerWashing = searchParams.get('powerWashing');
  const repointing = searchParams.get('repointing');
  const strimming = searchParams.get('strimming');
  const name = searchParams.get('name');

  const other = searchParams.get('other');
  let pleaseSpecify: string | null = '';
  if (other) pleaseSpecify = searchParams.get('pleaseSpecify');

  const initState: ReviewFormModel = {
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
    title: ''
  };

  const [initialValues, setInitialValues] = useState(initState);
  const [sent, setSent] = useState(false);

  const {
    register,
    handleSubmit,
    getValues,
    setValue,
    watch,
    formState: { errors }
  } = useForm({
    mode: "onTouched",
    reValidateMode: "onSubmit",
    // reValidateMode: "onChange",
    defaultValues: initialValues
  });

  useEffect(() => {
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
    }
  }, []);

  const onSubmit = (data: ReviewFormModel) => {
    sendEmail(data);
    setSent(true);
  }

  const onError = (error: FieldErrors<ContactFormModel>) => {
    console.log("ERROR:::", error);
  };

  watch('rating');

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
            onChange={i => setValue('rating', i)}
            rules={{ required: "Rating is required" }}
          />

          {errors.rating && (
            <Form.Text className="text-danger">
              {errors.rating.message}
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

        <Form.Group className="mb-3" controlId="title">
          <Form.Label>Title your review</Form.Label>
          <Form.Control
            type="text"
            placeholder="Title"
            {...register("title", { required: "Title is required" })}
          />
          {errors.title && (
            <Form.Text className="text-danger">
              {errors.title.message}
            </Form.Text>
          )}
        </Form.Group>

        <Form.Group className="mb-3" controlId="message">
          <Form.Label>Write your review</Form.Label>
          <Form.Control
            placeholder="Message"
            as="textarea"
            rows={3}
            {...register("message", { required: "Message is required" })}
          />
          {errors.message && (
            <Form.Text className="text-danger">
              {errors.message.message}
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