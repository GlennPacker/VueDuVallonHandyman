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
    gutters: false,
    tiling: false,
    painting: false
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
    gardening,
    generalMaintenance,
    gutters,
    name,
    powerWashing,
    repointing,
    strimming,
    tiling,
    painting
  } = values;

  if (name) {
    url += `name=${encodeURI(name)}&`
  }

  if (gardening) {
    url += `gardening=true&`
  }

  if (generalMaintenance) {
    url += `generalMaintenance=true&`
  }

  if (powerWashing) {
    url += `powerWashing=true&`
  }

  if (repointing) {
    url += `repointing=true&`
  }

  if (strimming) {
    url += `strimming=true&`
  }

  if (gutters) {
    url += `gutters=true&`
  }

  if (tiling) {
    url += `tiling=true&`
  }

  if (painting) {
    url += `painting=true&`
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

      <Form.Group className="mb-3" controlId="generalMaintenance">
        <Form.Check
          type="checkbox"
          label="general Maintenance"
          onChange={({ target: { checked } }) => update('generalMaintenance', checked)}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="gardening">
        <Form.Check
          type="checkbox"
          label="gutters"
          onChange={({ target: { checked } }) => update('gutters', checked)}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="powerWashing">
        <Form.Check
          type="checkbox"
          label="Pressure Wash"
          onChange={({ target: { checked } }) => update('powerWashing', checked)}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="repointing">
        <Form.Check
          type="checkbox"
          label="Repointing"
          onChange={({ target: { checked } }) => update('repointing', checked)}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="strimming">
        <Form.Check
          type="checkbox"
          label="Strimming"
          onChange={({ target: { checked } }) => update('strimming', checked)}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="tiling">
        <Form.Check
          type="checkbox"
          label="Tiling"
          onChange={({ target: { checked } }) => update('tiling', checked)}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="painting">
        <Form.Check
          type="checkbox"
          label="Painting"
          onChange={({ target: { checked } }) => update('painting', checked)}
        />
      </Form.Group>
      <p>
        Please could you review Vue Du Vallon Handyman for the work that I have done for you.
      </p>
      <p>
        {url.substring(0, url.length - 1)}
      </p>
      <p>
        All reviews (whether good, bad, or otherwise) will be made public to help other people make more informed decisions.
      </p>

      <Button
        variant="primary"
        onClick={() => onSubmit()}>
        Submit
      </Button>
    </Form>
  );
};

export default ReviewForm;