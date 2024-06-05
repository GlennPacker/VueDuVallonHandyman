'use client';
import { Form, Button } from "react-bootstrap";
import { ContactFormModel } from '@/types/contactFormModel';
import { useForm, FieldErrors } from 'react-hook-form'
import React from "react";
import { sendEmail } from "@/services/emailService";
import { useState } from 'react';
import { ReviewRequestFormModel } from "@/types/reviewRequestFormModel";

const ReviewForm = () => {
  const initState: ReviewRequestFormModel = {
    gardening: false,
    generalMaintenance: false,
    name: '',
    other: false,
    pleaseSpecify: '',
    powerWashing: false,
    repointing: false,
    strimming: false,
    email: '',
    reviewRequest: true,
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

  const onSubmit = (data: ReviewRequestFormModel) => {
    if (data.email) {
      sendEmail(data);
    }
    setSent(true);
  }

  const onError = (error: FieldErrors<ContactFormModel>) => {
    console.log("ERROR:::", error);
  };

  if (sent) {
    return (
      <>Thank you, it is most appreciated.</>
    )
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit, onError)}>
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

      <Form.Group className="mb-3" controlId="gardening">
        <Form.Check
          type="checkbox"
          label="gardening"
          {...register("gardening")}
        />
      </Form.Group>

      {JSON.stringify(getValues())}

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default ReviewForm;