import React, { useCallback, useEffect, useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Box,
  Text,
  Button,
} from "@chakra-ui/react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

export default function ModalItem({ match }) {
  const [data, setData] = useState({});
  const {
    params: { id, status },
  } = match;
  const history = useHistory();
  const onClose = () => history.push("/");
  const {
    data: { unCompletedList, completedList },
  } = useSelector((state) => state.todo);

  const filterData = useCallback(() => {
    let item;
    if (Number(status))
      item = completedList.filter((item) => Number(item.id) === Number(id));
    else
      item = unCompletedList.filter((item) => Number(item.id) === Number(id));
    setData(item[0]);
  }, [completedList, unCompletedList, id, status]);

  useEffect(() => {
    filterData();
  }, [filterData]);

  return (
    <>
      <Modal size="md" isOpen={true} onClose={onClose}>
        <ModalOverlay />
        <ModalContent maxW="80%">
          <ModalHeader>{data.title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody w="100%" justifyContent="center" alignItems="center">
            <Box>
              <Text>{data.id}</Text>
              <Text>{data.description}</Text>
              <Text>{data.createdAt}</Text>
              <Text>
                {Number(data.status) === 0 ? "Uncompleted" : "Completed"}
              </Text>
            </Box>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="green" mr={3}>
              Edit
            </Button>
            <Button colorScheme="red">Delete</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
