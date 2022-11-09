import axios from "axios";
import React, { useState } from "react";
import {useNavigate, useParams, useLocation} from "react-router-dom"
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import MemberDataService from "../services/member";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const Member = props => {
    const navigate = useNavigate()
    let params = useParams()
    let editing = false
    let initialMemberState = ""
    let location = useLocation()
    if (location.state) {
        editing = true
    }
    console.log(location)
    const [first_name, setFirstName] = useState('');
    const [last_name, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [role, setRole] = useState(false);
    const save = () => {
        var data = {
            first_name: first_name,
            last_name: last_name,
            email: email,
            phone: phone,
            role:  role
        }
        if (editing) {
            MemberDataService.updateMember(location.state.currentMember.id, data)
                .then(response => {
                    console.log('updated')
                    navigate("/api/members")})
                .catch(e => {
            console.log(e)
            })
        } else {
            MemberDataService.addMember(data)
                .then(response => {
                    console.log("saved")
                    navigate("/api/members")
                })
                .catch(e => {
                    console.log(e)
                })
        }
    }
    return (
    <Container className="main-container">
      <Form>
          <Form.Label>
              <h1>{editing? "Edit": "Add"} Member</h1>
              <p>{editing? "Edit": "Set"} contact info and role.</p>
          </Form.Label>
          <h4 className="mb-3">Info</h4>
        <Form.Group className="mb-3">
            <div className="form-floating">
              <Form.Control
                as="textarea"
                type="text"
                required = {!editing}
                first_name={first_name}
                placeholder={ editing? location.state.currentMember.first_name: ""}
                onChange={e => {setFirstName(e.target.value)}}
              />
            </div>
            <div className="form-floating">
                <Form.Control
                as="textarea"
                type="text"
                required= {!editing}
                last_name={last_name}
                placeholder={ editing? location.state.currentMember.last_name: ""}
                onChange={e => {setLastName(e.target.value)}}
            />
            </div>
            <div className="form-floating">
                <Form.Control
                as="textarea"
                type="text"
                required= {!editing}
                email={email}
                placeholder={ editing? location.state.currentMember.email: ""}
                onChange={e => {setEmail(e.target.value)}}
                />
            </div>
            <div className="form-floating">
                <Form.Control
                as="textarea"
                type="text"
                required= {!editing}
                phone={phone}
                placeholder={ editing? location.state.currentMember.phone: ""}
                onChange={e => {setPhone(e.target.value)}}
                />
            </div>
        </Form.Group>

          <h4 className="mb-3">Role</h4>
          <Form.Group>
            <div className="my-3">
                <div className="form-check">
                    <input id="credit" name="paymentMethod" type="radio" className="form-check-input"
                           checked
                           required
                           onChange={e => setRole(false)}/>
                    <label className="form-check-label" htmlFor="credit"> Regular - can't delete members </label>
                </div>
                <div className="form-check">
                    <input id="debit" name="paymentMethod" type="radio" className="form-check-input"
                           required
                           onChange={e => setRole(true)}/>
                    <label className="form-check-label" htmlFor="debit"> Admin - can delete members </label>
                </div>
            </div>
        </Form.Group>
          <Row className="buttons">
          <Col>
              {editing &&
                  <Button variant="primary" onClick={()=>{
                      MemberDataService.deleteMember(location.state.currentMember.id)
                          .then(
                              response => {
                                  console.log('deleted')
                                  navigate("/api/members")}
                          )
                          .catch(e => {
                              console.log(e);
                          })
                  }
                  }>Delete</Button>}
          </Col>
          <Col>
              <Button variant="primary" onClick={save}>Save</Button>
          </Col>
        </Row>
      </Form>
    </Container>
  )
}

export default Member