import React, {useState, useEffect, useCallback} from "react";
import MemberDataService from '../services/member';
import {Link, useNavigate} from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from "react-bootstrap/Container";
import Card from 'react-bootstrap/Card';

const MemberList = props => {
    const [members, setMembers] = useState([])
    const [nums, setNums] = useState(0)
    useEffect(() => {
          MemberDataService.getAll()
          .then(response => {
              setMembers(response.data)
              setNums(response.data.length)
          })
          .catch(e => {
            console.log(e);
          })
    }, [])

    return (
        <Container className="main-container">
         <Form>
        <Form.Label>
            <Row>
                <Col>
                    <h1>Team Members</h1>
                </Col>
                <Col>
                    <Link to={{pathname: "add"}}>Add</Link>
                </Col>
            </Row>
            <p> you have {nums} team members </p>
        </Form.Label>
        </Form>
          <Row className="memberRow">
              {members.map((member) => {
                      return (
                          <Link to={{pathname: '' + member.id}}
                            state={{currentMember: member}}>
                              <div className="form-floating">
                                <h3 className="member">{member.first_name} {member.last_name} {member.role? "(admin)":""}</h3>
                                   <p>{member.phone}</p>
                                  <p>{member.email}</p>
                              </div>
                          </Link>
                      )
                  })
              }
          </Row>
        </Container>
    )}


export default MemberList;
