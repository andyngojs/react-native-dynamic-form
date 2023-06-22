import React from 'react';
import {SafeAreaView} from 'react-native';
import * as yup from 'yup';
import {DynamicForm, Field, FieldEnum} from '@src/react-native-dynamic-form';

const fields: Field[] = [
  {
    label: 'Name',
    placeholder: 'The name will be displayed',
    name: 'name',
    value: '',
  },
  {
    label: 'Email',
    placeholder: 'Please input email',
    type: FieldEnum.EMAIL,
    name: 'email',
    value: '',
  },
  {
    label: 'Password',
    placeholder: 'Password',
    type: FieldEnum.PASSWORD,
    name: 'password',
    value: '',
  },
  {
    label: 'Confirm password',
    placeholder: 'Confirm password',
    type: FieldEnum.PASSWORD,
    name: 'confirmPassword',
    value: '',
  },
  {
    label: 'Agreement Terms',
    type: FieldEnum.SWITCH,
    name: 'agreeTerm',
    value: false,
  },
];

const schema = yup.object().shape({
  password: yup.string().required().min(3).max(30),
  email: yup.string().required().email(),
  confirmPassword: yup
    .string()
    .required()
    .test(
      'passwords-match',
      'Confirm password must matches the password',
      function (value) {
        return this.parent.password === value;
      },
    ),
});

function App() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <DynamicForm
        fields={fields}
        validationSchema={schema}
        onSubmit={(data: any, actions: any) => {
          console.log('Submited', data);
        }}
        buttonTitle="Đăng Ký"
      />
    </SafeAreaView>
  );
}

export default App;
