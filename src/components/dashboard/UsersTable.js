import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, CardBody, CardTitle, CardSubtitle, Table, Button } from 'reactstrap';
import Image from 'next/image';
import user5 from '../../assets/images/users/user4.jpg';
import { useRouter } from 'next/router';

const fetchUsers = async (token) => {
  try {
    const response = await axios.get('http://localhost:3001/usuarios/', {
      headers: {
        Authorization: token
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching users:', error);
    return [];
  }
};

const UsersTable = () => {
  const [users, setUsers] = useState([]);
  const router = useRouter();
  
  useEffect(() => {
    const token = localStorage.getItem('access_token');
    if (!token) {
      router.push('/log-in');
      return;
    }

    const fetchData = async () => {
      const userData = await fetchUsers(token);
      setUsers(userData);
    };
    fetchData();
  }, [router]);

  const handleClick = (id) => {
    console.log(id)
    window.location.href = '/edit/user?data='+id
  };

  return (
    <Card>
      <CardBody>
        <CardTitle tag="h5">Usuarios Registrados</CardTitle>
        <CardSubtitle className="mb-2 text-muted" tag="h6"></CardSubtitle>
        <div className="table-responsive">
          <Table className="text-nowrap mt-3 align-middle" borderless>
            <thead>
              <tr>
                <th>Nombre y Correo</th>
                <th>Tipo de Usuario</th>
                <th>Identificación</th>
                <th>Suscripción</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={index} className="border-top">
                  <td>
                    <div className="d-flex align-items-center p-2">
                      <Image
                        src={user.avatar || user5}
                        className="rounded-circle"
                        alt="avatar"
                        width="45"
                        height="45"
                      />
                      <div className="ms-3">
                        <h6 className="mb-0">{user.nombre}</h6>
                        <span className="text-muted">{user.email}</span>
                      </div>
                    </div>
                  </td>
                  <td>{user.rol}</td>
                  <td>{user.identificacion}</td>
                  <td>{user.suscripcion}</td>
                  <td> <div className="d-flex mt-1">
       
                      <Button
                        color="primary"
                        size="sm"
                        className="me-1"
                        onClick={() => handleClick(user._id)}
                      >
                        Editar
                      </Button>
            
                    <Button
                      color="danger"
                      size="sm"
                    >
                      Eliminar
                    </Button>
                  </div></td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </CardBody>
    </Card>
  );
};

export default UsersTable;
