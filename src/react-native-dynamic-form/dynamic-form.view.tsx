import React from 'react';
import {
  Text,
  KeyboardAvoidingView,
  ActivityIndicator,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
// @packages
import {Formik} from 'formik';
// @types
import {DynamicFormProps, Field, FieldEnum} from './dynamic-form.type';
// @hooks
import {useDynamicForm} from './dynamic-form.hook';
// @components
import {InputCommon, Switch} from './components';
// @styles
import {styles} from './dynamic-form.style';

const _DynamicForm: React.FC<DynamicFormProps> = ({
  fields,
  validationSchema,
  onSubmit,
  buttonTitle,
  buttonContainerStyle,
  buttonTitleStyle,
}) => {
  const {initialValues} = useDynamicForm(fields);

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}>
      {({
        isSubmitting,
        isValid,
        handleSubmit,
        errors,
        values,
        handleChange,
        handleBlur,
        touched,
        setFieldValue,
      }) => {
        console.log(values);
        
        return (
          <ScrollView style={{flex: 1}}>
            <KeyboardAvoidingView style={{marginHorizontal: 12}}>
              {fields.map((field: Field, index: number) => {
                if (field.type === FieldEnum.SWITCH) {
                  return (
                    <Switch
                      values={values}
                      setFieldValue={setFieldValue}
                      field={field}
                      key={field.name}
                    />
                  );
                }

                if (field.type === FieldEnum.PASSWORD) {
                  return (
                    <React.Fragment key={field.name}>
                      <InputCommon
                        onBlur={handleBlur(field.name)}
                        onChangeText={handleChange(field.name)}
                        isError={
                          touched[field.name] &&
                          errors[field.name] !== undefined
                        }
                        field={field}
                        autoFocus={index === 0 ? true : false}
                        secureTextEntry
                      />
                      {touched[field.name] &&
                        errors[field.name] !== undefined && (
                          <Text style={styles.error}>{errors[field.name]}</Text>
                        )}
                    </React.Fragment>
                  );
                }

                if (field.type === FieldEnum.TEXTAREA) {
                  return (
                    <React.Fragment key={field.name}>
                      <InputCommon
                        onBlur={handleBlur(field.name)}
                        onChangeText={handleChange(field.name)}
                        isError={
                          touched[field.name] &&
                          errors[field.name] !== undefined
                        }
                        field={field}
                        multiline
                        numberOfLines={field.numberOfLines}
                        autoFocus={index === 0 ? true : false}
                      />
                      {touched[field.name] &&
                        errors[field.name] !== undefined && (
                          <Text style={styles.error}>{errors[field.name]}</Text>
                        )}
                    </React.Fragment>
                  );
                }

                return (
                  <React.Fragment key={field.name}>
                    <InputCommon
                      onBlur={handleBlur(field.name)}
                      onChangeText={handleChange(field.name)}
                      field={field}
                      isError={
                        touched[field.name] && errors[field.name] !== undefined
                      }
                      autoFocus={index === 0 ? true : false}
                    />
                    {touched[field.name] &&
                      errors[field.name] !== undefined && (
                        <Text style={styles.error}>{errors[field.name]}</Text>
                      )}
                  </React.Fragment>
                );
              })}

              <TouchableOpacity
                activeOpacity={0.8}
                disabled={!isValid}
                onPress={handleSubmit}
                style={[
                  buttonContainerStyle,
                  styles.buttonContainer,
                  !isValid && styles.disableButton,
                ]}>
                <Text style={[buttonTitleStyle, styles.btnTitle]}>
                  {buttonTitle || 'Submit'}
                </Text>
              </TouchableOpacity>
            </KeyboardAvoidingView>
          </ScrollView>
        );
      }}
    </Formik>
  );
};

export const DynamicForm = React.memo(_DynamicForm);
