import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Container } from "react-bootstrap";
import API from "../../API/mainServer";
import CardUpcoming from "./cardUpcoming";
import CardNextAppointment from "../../components/NextAppointment/cardNextAppointment";
import CardRecentAppointment from "./cardRecentAppointment";
import PendingPayments from "../../components/PendingPayments/index";
import "./index.css";

const PatientDashboard = () => {
  const [appointmentDone, setAppointmentDone] = useState([]);
  const [appointmentPaid, setAppointmentPaid] = useState([]);
  const [pendingPayment, setPendingPayment] = useState([]);
  const store = useSelector((state) => state.user.user_data);
  const patient_id = store._id;
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const fetchDataAppointment = async () => {
    try {
      const token = localStorage.getItem("accesstoken");
      const response = await API({
        method: "GET",
        url: `/appointments/patient`,
        headers: {
          accesstoken: token,
        },
      });

      const statusDone = response.data.data.filter(
        (el) => el.status === "Done"
      );
      const statusPaid = response.data.data.filter(
        (el) => el.status === "Paid"
      );
      setAppointmentDone(statusDone);
      setAppointmentPaid(statusPaid);
    } catch (error) {
      console.log(error);
    }
  };

  const getPendingPaymentData = async () => {
    try {
      const response = await API({
        method: "GET",
        url: `/payments/pending/${patient_id}`,
        headers: {
          accesstoken: localStorage.getItem("accesstoken"),
        },
      });
      setPendingPayment(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(
    () => {
      fetchDataAppointment();
      return fetchDataAppointment;
    },
    // eslint-disable-next-line
    []
  );

  useEffect(() => {
    if (patient_id) {
      getPendingPaymentData();
    }

    return getPendingPaymentData;
  }, [patient_id]);

  return (
    <>
      {/* Your Next appointment */}
      <Container
        className="pt-3"
        style={{ height: "150px", width: "350px", paddingTop: "10" }}
      >
        {!appointmentPaid ? (
          <h3>You Dont Have Any Appointment Schedule</h3>
        ) : (
          <CardNextAppointment appointmentPaid={appointmentPaid[0]} />
        )}
      </Container>

      {/* Your Next appointment */}
      {/* Upcoming appointment */}
      <Container className="flex-container mt-5">
        <div>
          <h5>Upcoming Appointment</h5>
          {appointmentPaid.map((item) => (
            <CardUpcoming key={item._id} appointmentPaid={item} />
          ))}
        </div>
      </Container>
      <hr></hr>
      {/* RECENT APPOINTMENT */}
      <Container className="flex-container">
        <div>
          <h5>Recent Appointment</h5>
          {appointmentDone.map((item) => (
            <CardRecentAppointment
              key={item._id}
              appointmentDone={item}
              appointmentFetch={fetchDataAppointment}
            />
          ))}
        </div>
      </Container>
      {pendingPayment.length === 0 ? null : (
        <PendingPayments data={pendingPayment} />
      )}
    </>
  );
};

export default PatientDashboard;
