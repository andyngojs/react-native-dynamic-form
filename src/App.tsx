import React from 'react';
import {SafeAreaView} from 'react-native';
import {DynamicForm, FormSchema} from '@src/react-native-dynamic-form';

const formSchema: FormSchema[] = [
  {
    label: 'Name',
    placeholder: 'Enter full name',
    type: 'text',
    name: 'name',
    value: '',
  },
  {
    label: 'Email',
    placeholder: 'Please input email',
    type: 'email',
    name: 'email',
    value: '',
    isRequire: true,
  },
  {
    label: 'Password',
    placeholder: 'Password',
    type: 'password',
    name: 'password',
    value: '',
    isRequire: true,
    minLength: 3,
    maxLength: 30,
  },
  {
    label: 'Confirm password',
    placeholder: 'Confirm password',
    type: 'confirm_password',
    name: 'confirmPassword',
    value: '',
    isRequire: true,
  },
  {
    label: 'Agreement Terms',
    type: 'switch',
    name: 'agreeTerm',
    value: false,
  },
];

function App() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <DynamicForm
        formSchema={formSchema}
        onSubmit={(data, actions) => {
          console.log('Submited', data);
        }}
        buttonTitle="Đăng Ký"
      />
    </SafeAreaView>
  );
}

export default App;
