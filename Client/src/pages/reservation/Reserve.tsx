import { useState } from "react";
import {
  Button,
  FormControl,
  Heading,
  Input,
  Stack,
  VStack,
} from "@chakra-ui/react";
import image from "../../assets/img3.jpg";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, ToastOptions, toast } from "react-toastify";
import axios from "axios";

const Reserve = () => {
  const bgImage = `url(${image})`;
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    tel: "",
    country: "",
    code: "",
    time: "",
  });
  const toastOptions:ToastOptions = {
    position: "top-right",
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };

  const handleChange = (e:any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const validateForm = () => {
    const { fname, lname, email, tel, country, code, time } = formData;
    if (!fname || !lname || !email || !country || !code || !tel || !time) {
      toast.error("All fields are required.", toastOptions);
      return false;
    }
    if (tel.length !== 10) {
      toast.error("Mobile number must be 10 digits.", toastOptions);
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const reservationRoute = "http://localhost:7500/api/reservation";
        console.log("Form Data:", formData); // Log the form data before sending
        const response = await axios.post(reservationRoute, formData);
        toast.success("Successful Operation...");
        console.log("Response Data:", response.data); // Log the response data for debugging
        navigate("/payment");
      } catch (err) {
        console.error("Error during Booking Your Hotel:", err);
        toast.error("Error during Booking Your Hotel. Try Again", toastOptions);
      }
    }
  };

  return (
    <Stack bgImage={bgImage} bgPosition="cover" bgSize="cover" h="100vh">
      <Stack
        justifyContent="center"
        alignItems="center"
        bgPosition="cover"
        bgSize="cover"
        height="100vh"
        backgroundColor="rgba(0, 0, 0, 0.5)"
      >
        <Stack
          bg="#020124"
          borderRadius="8px"
          // justifyContent="center"
          alignItems="center"
          w={{ base: "100%", md: "36%" }}
          opacity="1"
          zIndex="1"
          // h="85vh"
        >
          <Heading color="#ddd"> Reservation</Heading>
          <VStack spacing={4} align="center" py="1rem" width="80%">
            <FormControl id="name">
              <Input
                type="text"
                name="fname"
                value={formData.fname}
                onChange={handleChange}
                placeholder="FirstName"
              />
            </FormControl>
            <FormControl id="name">
              <Input
                type="text"
                name="lname"
                value={formData.lname}
                onChange={handleChange}
                placeholder="LastName"
              />
            </FormControl>
            <FormControl id="email">
              <Input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                // bg=""
              />
            </FormControl>

            <FormControl id="country">
              <Input
                type="text"
                name="country"
                value={formData.country}
                onChange={handleChange}
                placeholder="Country"
              />
            </FormControl>

            <FormControl id="country">
              <Input
                type="text"
                name="time"
                value={formData.time}
                onChange={handleChange}
                placeholder="Time You'll stay here"
              />
            </FormControl>

            <FormControl id="code">
              <Input
                type="text"
                name="code"
                value={formData.code}
                onChange={handleChange}
                placeholder="Postal code"
              />
            </FormControl>
            <FormControl id="tel">
              <Input
                type="number"
                name="tel"
                value={formData.tel}
                onChange={handleChange}
                placeholder="Mobile Number"
              />
            </FormControl>

            <Link to="/payment">
              <Button
                colorScheme="blue"
                onClick={handleSubmit}
                borderRadius="2rem"
                // w="40%"
              >
                Go To Payment
              </Button>
            </Link>
          </VStack>
        </Stack>
      </Stack>
      <ToastContainer />
    </Stack>
  );
};

export default Reserve;
