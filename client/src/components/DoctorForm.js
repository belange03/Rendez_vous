import { Button, Col, Form, Input, Row, TimePicker } from "antd";
import moment from "moment";
import React from "react";

function DoctorForm({ onFinish, initivalValues }) {
  return (
    <Form
      layout="vertical"
      onFinish={onFinish}
      initialValues={{
        ...initivalValues,
        ...(initivalValues && {
          timings: [
            moment(initivalValues?.timings[0], "HH:mm"),
            moment(initivalValues?.timings[1], "HH:mm"),
          ],
        }),
      }}
    >
      <h1 className="card-title mt-3">Information Personnelle</h1>
      <Row gutter={20}>
        <Col span={8} xs={24} sm={24} lg={8}>
          <Form.Item
            required
            label="Nom"
            name="firstName"
            rules={[{ required: true }]}
          >
            <Input placeholder="Nom" />
          </Form.Item>
        </Col>
        <Col span={8} xs={24} sm={24} lg={8}>
          <Form.Item
            required
            label="Prenom"
            name="lastName"
            rules={[{ required: true }]}
          >
            <Input placeholder="Prenom" />
          </Form.Item>
        </Col>
        <Col span={8} xs={24} sm={24} lg={8}>
          <Form.Item
            required
            label="Numéro de téléphone"
            name="phoneNumber"
            rules={[{ required: true }]}
          >
            <Input placeholder="Numéro de téléphone"/>
          </Form.Item>
        </Col>
        <Col span={8} xs={24} sm={24} lg={8}>
          <Form.Item
            required
            label="Site web"
            name="website"
            rules={[{ required: true }]}
          >
            <Input placeholder="Site web" />
          </Form.Item>
        </Col>
        <Col span={8} xs={24} sm={24} lg={8}>
          <Form.Item
            required
            label="Adresse"
            name="address"
            rules={[{ required: true }]}
          >
            <Input placeholder="Adresse" />
          </Form.Item>
        </Col>
      </Row>
      <hr />
      <h1 className="card-title mt-3">Information Professionnelle</h1>
      <Row gutter={20}>
        <Col span={8} xs={24} sm={24} lg={8}>
          <Form.Item
            required
            label="Spécialisation"
            name="specialization"
            rules={[{ required: true }]}
          >
            <Input placeholder="Spécialisation" />
          </Form.Item>
        </Col>
        <Col span={8} xs={24} sm={24} lg={8}>
          <Form.Item
            required
            label="Experience"
            name="experience"
            rules={[{ required: true }]}
          >
            <Input placeholder="Experience" type="number" />
          </Form.Item>
        </Col>
        <Col span={8} xs={24} sm={24} lg={8}>
          <Form.Item
            required
            label="Frais par consultation"
            name="feePerCunsultation"
            rules={[{ required: true }]}
          >
            <Input placeholder="Frais par consultation" type="number" />
          </Form.Item>
        </Col>
        <Col span={8} xs={24} sm={24} lg={8}>
          <Form.Item
            required
            label="Temps"
            name="timings"
            rules={[{ required: true }]}
          >
            <TimePicker.RangePicker format="HH:mm" />
          </Form.Item>
        </Col>
      </Row>

      <div className="d-flex justify-content-end">
        <Button className="primary-button" htmlType="submit">
          Envoyer
        </Button>
      </div>
    </Form>
  );
}

export default DoctorForm;
