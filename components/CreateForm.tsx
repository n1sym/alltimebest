import {
  Input,
  Text,
  FormControl,
  OrderedList,
  ListItem,
  FormErrorMessage,
  Radio,
  Button,
  Stack,
  RadioGroup,
  HStack,
  CloseButton
} from '@chakra-ui/react'
import { useState } from 'react'

export function CreateForm() {
  const [userName, setUserName] = useState('')
  const [categoryName, setCategoryName] = useState('')
  const [inputUserNameValidation, setInputUserNameValidation] = useState(false)
  const [inputCategoryNameValidation, setInputCategoryNameValidation] = useState(false)
  const [inputNameValidation, setInputNameValidation] = useState(false)
  const [category, setCategory] = useState('1')
  const [list, setList] = useState(["test"])
  const [name, setName] = useState('')


  function handleNameChange(e: { target: { value: string; }; }) {
    setUserName(e.target.value)
    setInputUserNameValidation(false)
  }

  function handleCategoryNameChange(e: { target: { value: string; }; }) {
    setCategoryName(e.target.value)
    setInputCategoryNameValidation(false)
  }

  function handleNewName(e: { target: { value: string; }; }) {
    setName(e.target.value)
    setInputNameValidation(false)
  }

  function submitForm() {
    if (userName == "" || userName.length > 16) {
      setInputUserNameValidation(true)
    }
    if (categoryName == "" || categoryName.length > 16) {
      if (category == '6') {
        setInputCategoryNameValidation(true)
      }
    }
    if (list.length == 0){
      setInputNameValidation(true)
    }
    if (inputNameValidation || inputUserNameValidation || inputCategoryNameValidation) {
      return;
    }
  }

  function addList(e: any) {
    e.preventDefault()
    if (name == "" || name.length > 100) {
      setInputNameValidation(true)
      return;
    }
    setList(list => [...list, name])
    setName('')
  }

  function removeList(index: number){
    const newList = [...list]
    newList.splice(index,1)
    setList(newList)
  }

  return (
    <>
      <FormControl isInvalid={inputUserNameValidation}>
        <Text width={12} mb={2} fontWeight={"semibold"}>
          ??????:
        </Text>
        <Input
          placeholder='???????????????????????????'
          value={userName}
          maxWidth={360}
          onChange={(e) => handleNameChange(e)}
          isRequired={true}
        />
        {userName == '' ? (
          <FormErrorMessage>?????????????????????????????????</FormErrorMessage>
        ) : (
          <FormErrorMessage>16?????????????????????????????????????????????</FormErrorMessage>
        )}
      </FormControl>
      <FormControl>
        <Text width={24} mb={2} mt={4} fontWeight={"semibold"}>
          ????????????:
        </Text>
        <RadioGroup onChange={setCategory} value={category}>
          <Radio mr={2} mb={2} value='1'>??????</Radio>
          <Radio mr={2} mb={2} value='2'>??????</Radio>
          <Radio mr={2} mb={2} value='3'>?????????</Radio>
          <Radio mr={2} mb={2} value='4'>??????</Radio>
          <Radio mr={2} mb={2} value='5'>?????????</Radio>
          <Radio mr={2} mb={2} value='6'>?????????</Radio>
        </RadioGroup>
      </FormControl>

      {category == '6' && (
        <>
          <FormControl isInvalid={inputCategoryNameValidation}>
            <Input
              placeholder='????????????????????????'
              value={categoryName}
              mt={2}
              maxWidth={360}
              onChange={(e) => handleCategoryNameChange(e)}
            />
            {categoryName == '' ? (
              <FormErrorMessage>?????????????????????????????????</FormErrorMessage>
            ) : (
              <FormErrorMessage>16??????????????????????????????????????????????????????</FormErrorMessage>
            )}
          </FormControl>
        </>
      )}

      <FormControl isInvalid={inputNameValidation}>
        <form onSubmit={(e) => addList(e)}>
          <Stack>
            <Text width={240} mt={4} fontWeight={"semibold"}>
              ???????????????????????????????????????:
            </Text>
            <Text mb={2} color={"gray.500"} fontSize='sm'>
              1~10?????????????????????????????????
            </Text>
            <Input
              placeholder='??????????????????'
              value={name}
              mt={2}
              maxWidth={360}
              onChange={(e) => handleNewName(e)}
            />
            {name == '' ? (
              <FormErrorMessage>????????????????????????????????????</FormErrorMessage>
            ) : (
              <FormErrorMessage>100????????????????????????????????????????????????</FormErrorMessage>
            )}
            <Button
              width={16}
              bg="blue.200"
              _hover={{ bg: 'blue.300' }}
              color="gray.700"
              onClick={(e) => addList(e)}
            >
              ??????
            </Button>
          </Stack>
        </form>
      </FormControl>
      <OrderedList mt={8} spacing={2}>
        {list.map((name, index) => (
          <ListItem key={index} >
            <HStack>
              <Text fontSize={"lg"}>
                {name}
              </Text>
              <CloseButton
                bg="red.100"
                _hover={{ bg: 'red.200' }}
                size='md'
                onClick={() => removeList(index)}
              />
            </HStack>
          </ListItem>
        ))}
      </OrderedList>
      <Button
        mt={8}
        color="gray.700"
        onClick={() => submitForm()}
      >
        ??????????????????
      </Button>
    </>
  )
}