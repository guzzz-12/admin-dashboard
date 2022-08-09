import {useState, useEffect} from "react";
import {useParams, Navigate} from "react-router-dom";
import {Box, Typography, Avatar} from "@mui/material";
import Spinner from "../Spinner";
import {usersTableRows as usersData, UserData} from "../usersTable/usersTableData";
import "./userComponentsStyles.css";

const UserCard = () => {
  const {userId} = useParams();

  const [user, setUser] = useState<UserData | undefined>(undefined);
  const [loading, setLoading] = useState<boolean>(true);


  /*-----------------------------------------------------*/
  // Buscar el usuario correspondiente a la ID en la url
  /*-----------------------------------------------------*/
  useEffect(() => {
    setLoading(true);
    setUser(undefined);
    
    const foundUser: UserData | undefined = usersData.find(user => user.id === userId);

    setUser(foundUser);
    setLoading(false);
  }, [userId]);


  /*----------------------------------------------------*/
  // Mostrar spinner mientras carga la data del usuario
  /*----------------------------------------------------*/
  if(!user && loading) {
    return <Spinner />
  }
  
  
  /*-----------------------------*/
  // Redirigir si no hay usuario
  /*-----------------------------*/
  if(!user && !loading) {
    return <Navigate to="/users" />
  }


  return (
    <Box className="user__card">
      <Typography variant="h5" className="user__card-header">
        Information
      </Typography>
      <Box className="user__card-info">
        <Box className="user__card-avatar">
          <Avatar
            style={{
              width: "120px",
              height: "120px",
              border: "1px solid var(--text-color)"
            }}
            src={user!.img}
            alt={user!.username}
          />
        </Box>
        <Box className="user__card-text">
          <Typography
            className="user__card-name overflow-ellipsis"
            variant="h4"
          >
            {user!.username}
          </Typography>
          <Typography className="user__card-email overflow-ellipsis">
            {user!.email}
          </Typography>
          <Typography className="user__card-phone overflow-ellipsis">
            Phone: +1 123 123 1234
          </Typography>
          <Typography className="user__card-country">
            Country: USA
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}

export default UserCard;