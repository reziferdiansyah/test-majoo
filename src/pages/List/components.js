import React, { useEffect, useState } from "react";
import { Stack, Box, Text } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { loadData } from "actions/list";
import Loading from "components/Loading";

const ItemList = ({ data, title, onClickItem }) => (
  <>
    <Text fontWeight="800" fontSize="20px" borderBottom="1px solid gray">
      {title}
    </Text>
    {data.map(({ title, id, status }, i) => (
      <Box margin="10px 0" key={i}>
        <Text
          className="todo__item"
          cursor="pointer"
          onClick={() => onClickItem(id, status)}
        >
          {title}
        </Text>
      </Box>
    ))}
  </>
);

export default function List() {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const { data } = useSelector((state) => state.todo);
  const history = useHistory();
  const onClickItem = (id, status) => {
    history.push(`/detail/${status}/${id}`);
  };
  useEffect(() => {
    setIsLoading(true);
    dispatch(loadData(true));
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => {
      clearTimeout(200);
    };
  }, [dispatch]);
  return (
    <Stack
      direction="row"
      w="100%"
      justifyContent="center"
      alignItems="center"
      position="absolute"
      top="60%"
      zIndex="999"
    >
      <Box
        textAlign="center"
        justifyContent="center"
        alignItems="center"
        bg="white"
        w="40%"
        boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px;"
        padding="10px"
        borderRadius="3px"
      >
        {isLoading ? (
          <Loading />
        ) : data ? (
          <>
            <ItemList
              onClickItem={onClickItem}
              title="Uncomplete Todo List"
              data={data.unCompletedList}
            />
            <ItemList
              onClickItem={onClickItem}
              title="Completed Todo List"
              data={data.completedList}
            />
          </>
        ) : (
          <Text>Error Connection</Text>
        )}
      </Box>
    </Stack>
  );
}
