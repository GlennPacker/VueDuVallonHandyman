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

  const [values, setValues] = useState(initState);
  const [sent, setSent] = useState(false);

  const onSubmit = (data: ReviewRequestFormModel) => {
    if (data.email) {
      sendEmail(data);
    }
    setSent(true);
  }

  if (sent) {
    return (
      <>Review Request sent.</>
    )
  }

  const update = (field: string, val: string) => {
    // const update = () => { 
    setValues({
      ...values,
      [field as keyof (ReviewRequestFormModel)]: val
    } as ReviewRequestFormModel);
  }

  let url = 'https://vueduvallonhandyman.fr/review?'
  const {
    name,
    gardening
  } = values;

  if (name) {
    url += `name=${name}&`
  }

  if (gardening) {
    url += `gardening=true&`
  }

  return (
    <Form onSubmit={() => onSubmit}>
      <Form.Group className="mb-3" controlId="name">
        <Form.Label>Name</Form.Label>
        <Form.Control
          placeholder="Name"
          onChange={({ target: { value } }) => update('name', value)}
        />
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