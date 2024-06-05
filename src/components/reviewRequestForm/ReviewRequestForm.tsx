'use client';
import { Form, Button } from "react-bootstrap";
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

  const onSubmit = () => {
    if (values.email) {
      sendEmail(url);
    }
    setSent(true);
  }

  if (sent) {
    return (
      <>Review Request sent.</>
    )
  }

  const update = (field: string, val: string | boolean) => {
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
      <Form.Group className="mb-3" controlId="email">
        <Form.Label>Email</Form.Label>
        <Form.Control
          placeholder="Email"
          onChange={({ target: { value } }) => update('email', value)}
        />
      </Form.Group>

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
          onChange={({ target: { checked } }) => update('gardening', checked)}
        />
      </Form.Group>

      {url.substring(0, url.length - 1)} <br />

      <Button
        variant="primary"
        onClick={() => onSubmit()}>
        Submit
      </Button>
    </Form>
  );
};

export default ReviewForm;