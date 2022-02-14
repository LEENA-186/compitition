import React, { Component } from 'react';

import Validate from './Validate';

import Input from './Component/Input';
import Select from './Component/Select';
import Checkbox from './Component/Checkbox';
import Radio from './Component/Radio';
import Button from './Component/Button'
import Textarea from './Component/Textarea';

export default class Main extends Component {
    constructor() {
        super();
        this.state={
            formIsValid: false,
            formControls:{
                name:{
                    name:'name',
                    type:'text',
                    value:'',
                    title:'Name',
                    valid:false,
                    errorMsg:'',
                    touched:false,
                    validationRules:{
                    minLength :6,
                  //  maxLength:10,
                   isRequired:true,
                   isAlpha:true
                    }
                },
                age:{
                        name:'age',
                        type:'number',
                        value:'',
                        title:'Age',
                        valid:false,
                        errorMsg:'',
                        touched:false,
                        validationRules:{
                        minLength :2,
                       maxLength:3,
                       isRequired:true,
                       isNumber:true
                }},
                        mobile:{
                            name:'mobile',
                            type:'number',
                            value:'',
                            title:'Mobile',
                            valid:false,
                            errorMsg:'',
                            touched:false,
                            validationRules:{
                            minLength :10,
                           maxLength:10,
                           isRequired:true,
                           isNumber:true
                         } },
                            email:{
                                name:'email',
                                type:'email',
                                value:'',
                                title:'Email',
                                valid:false,
                                errorMsg:'',
                                touched:false,
                                validationRules:{
                                minLength :8,
                               maxLength:30,
                               isRequired:true,
                               isEmail:true
                             } },
                                gender:{
                                    type:'radio',
                                    value:'',
                                    title:'Gender',
                                    name:'gender',
                                    valid:false,
                                    errorMsg:'',
                                    touched:false,
                                    validationRules:{
                                isRequired:true,
                                  } ,
                                  options: [
                                    { value: 'male', displayValue: 'Male' },
                                    { value: 'female', displayValue: 'Female'},
                                    { value: 'other', displayValue: 'Other'},
                                  ]
                
                                
                                },
                                  language:{
                                    type:'radio',
                                    value:'',
                                    title:'LanguagePreference',
                                    name:'language',
                                    valid:false,
                                    errorMsg:'',
                                    touched:false,
                                    validationRules:{
                                isRequired:true,
                                  },
                                  options: [
                                    { value: 'hindi', displayValue: 'Hindi' },
                                    { value: 'english', displayValue: 'English' },
                                    { value: 'telugu', displayValue: 'Telugu' },
                                    { value: 'tamil', displayValue: 'Tamil' },
                                   
                                  ]
                                },
                                  season: {
                                    type: 'select',
                                    value: '',
                                    name:'season',
                                    placeholder: 'Which season you want to participate?',
                                    valid: false,
                                    errorMsg: '',
                                    touched: false,
                                    validationRules: {
                                      isRequired: true,
                                    },
                                    options: [
                                      { value: 'season1', displayValue: 'Season1' },
                                      { value: 'season2', displayValue: 'Season2'}
                                    ]
              },            
                                  music: {
                                      title:'Music Preference ',
                                    type: 'checkbox',
                                    value: [],
                                    placeholder: 'type',
                                    name:'music',
                                    valid: false,
                                    errorMsg: '',
                                    touched: false,     
                                    validationRules: {
                                        isRequired: true,
                                    },
                                    options: [
                                      { value: 'Western', displayValue: 'Western' },
                                      { value: 'Classical', displayValue: 'Classical' },
                                      { value: 'Rap', displayValue: 'Rap' },
                                      { value: 'Folk', displayValue: 'Folk' },
                                      { value: 'Country', displayValue: 'Country' },
                                      { value: 'Hiphop', displayValue: 'Hiphop' },
                                    ]
                                  },
                                  audcity: {
                                      title:'Audition City',
                                    type: 'select',
                                    value: [],
                                    name:'audcity',
                                    placeholder: 'Select audition city',
                                    valid: false,
                                    errorMsg: '',
                                    touched: false,
                                    validationRules: {
                                      isRequired: true,
                                    },
                                    multiple: true,
                                         options: [
                                      { value: 'Delhi', displayValue: 'Delhi' },
                                      { value: 'Mumbai', displayValue: 'Mumbai'},
                                      { value: 'Vizag', displayValue: 'Vizag'},
                                      { value: 'Bhuvaneswar', displayValue: 'Bhuvaneswar'},
                                      { value: 'Hyderabad', displayValue: 'Hyderabad' },
                                      { value: 'Kolkata', displayValue: 'Kolkata'},
                                      { value: 'Banglore', displayValue: 'Banglore'},
                                      { value: 'Chennai', displayValue: 'Chennai'},
                                      { value: 'Tirichy', displayValue: 'Tirichy'},
                                      { value: 'Jaipur', displayValue: 'Jaipur'},
                                      { value: 'Pune', displayValue: 'Pune'},
                                    ]
            },
            description:{
                name:'description',
                type:'text',
                value:'',
                title:'Description',
                valid:false,
                errorMsg:'',
                touched:false,
                validationRules:{
                minLength :15,
               maxLength:60,
               isRequired:true,
               isAlpha:true
                }
            }


            }
        }
    }
                              changeHandler = event => {
    
                                const name = event.target.name;
                                console.log("Name : "+name);
                          
                                const updatedControls = {
                                  ...this.state.formControls
                                };
                          
                                const updatedFormElement = {
                                  ...updatedControls[name]
                                };
                          
                                let value;
                                let selectedOptions;
                                let newValArray; 


                                if (updatedControls[name].value instanceof Array &&
                                    updatedControls[name].type === 'select' &&
                                    updatedControls[name].multiple !== undefined &&
                                    updatedControls[name].multiple
                                    )
                                  {
                                    selectedOptions = event.target.selectedOptions;
                                    newValArray = [...selectedOptions].map(option => option.value);
                                    value = newValArray;
                                    console.log("MultiSelect - Value : "+value)
                                  }
                                  else 
                                  {
                                    value = event.target.value;
                                    
                                    if (updatedControls[name].value instanceof Array &&
                                    updatedControls[name].type === 'checkbox') {
                                      console.log("Before Checkbox Value : "+value)
                                      if(updatedControls[name].value.indexOf(value) > -1) {
                                      newValArray = 
                                      updatedControls[name].value.filter(s => s !== value)
                                      } else {
                                      newValArray = [...updatedControls[name].value, value];
                                      }
                                    value = newValArray;
                                    console.log("Checkbox Value : "+value)
                                    }
                                    else
                                    {
                                    value = event.target.value
                                    console.log("Value : "+value)
                                    }
                                  }
                                 
                                  updatedFormElement.value = value;
                                  updatedFormElement.touched = true;
                            
                                  let ValidationResult = Validate(value, updatedFormElement.validationRules);
                                  console.log(ValidationResult)
                                  updatedFormElement.valid = ValidationResult.valid;
                                  if ((!updatedFormElement.valid) && updatedFormElement.touched)
                                  {
                                    updatedFormElement.errorMsg = ValidationResult.errorMsg
                                  }
                                  else {
                                    updatedFormElement.errorMsg = ''
                                  }
                            
                                  updatedControls[name] = updatedFormElement;
                            
                                  let formIsValid = true;
                                  for (let inputIdentifier in updatedControls) {
                                    formIsValid = updatedControls[inputIdentifier].valid && formIsValid;
                                  }
                            
                                  this.setState({
                                    formControls: updatedControls,
                                    formIsValid: formIsValid
                                  });
                            
                              }
                              
                              
                              formSubmitHandler = () => {
                                const formData = {};
                                for (let formElementId in this.state.formControls) {
                                    formData[formElementId] = this.state.formControls[formElementId].value;
                                }
                                
                                     console.dir(formData);
                                    alert(`   Name: ${ formData.name} 
                                              Age: ${formData.age}
                                              Mobile: ${formData.mobile}
                                            Email: ${formData.email}
                                            Season: ${formData.season}
                                            Language: ${formData.language}
                                            MusicPreference: ${formData.music}
                                            AuditionCity: ${formData.audcity}
                                            Describe Yourself: ${formData.description} `)
                              }
                              
    
  render() {
    
    return (
    
    
      <form className="container-fluid">
              <Input type={'text'}
                     title={'Name'}
                     name={'name'}
                     placeholder={this.state.formControls.name.placeholder}
                     value={this.state.formControls.name.value}
                     handleChange={this.changeHandler}
                     touched={this.state.formControls.name.touched}
                     valid={this.state.formControls.name.valid}
                     errorMsg={this.state.formControls.name.errorMsg}
          />
          <Input type={'number'}
          title={'Age'}
          name={'age'}
          placeholder={this.state.formControls.age.placeholder}
          value={this.state.formControls.age.value}
          handleChange={this.changeHandler}
          touched={this.state.formControls.age.touched}
          valid={this.state.formControls.age.valid}
          errorMsg={this.state.formControls.age.errorMsg}
/>
         
<Input type={'number'}
          title={'Mobile'}
          name={'mobile'}
          placeholder={this.state.formControls.mobile.placeholder}
          value={this.state.formControls.mobile.value}
          handleChange={this.changeHandler}
          touched={this.state.formControls.mobile.touched}
          valid={this.state.formControls.mobile.valid}
          errorMsg={this.state.formControls.mobile.errorMsg}
/>
          <Input 
          type={'email'}
          title={'Email'}
          name={'email'}
          placeholder={this.state.formControls.email.placeholder}
          value={this.state.formControls.email.value}
          handleChange={this.changeHandler}
          touched={this.state.formControls.email.touched}
          valid={this.state.formControls.email.valid}
          errorMsg={this.state.formControls.email.errorMsg}
  />
  <Radio  title={'Gender'}
  name={'gender'}
  handleChange={this.changeHandler}
  value = {this.state.formControls.gender.value}
  options={this.state.formControls.gender.options}
  touched={this.state.formControls.gender.touched}
  valid={this.state.formControls.gender.valid}
  errorMsg={this.state.formControls.gender.errorMsg}
/> 
<Radio  title={'Language Preference'}
  name={'language'}
  handleChange={this.changeHandler}
  value = {this.state.formControls.language.value}
  options={this.state.formControls.language.options}
  touched={this.state.formControls.language.touched}
  valid={this.state.formControls.language.valid}
  errorMsg={this.state.formControls.language.errorMsg}
/> 
<Select 
                  title={'Season'}
                  name={'season'}
                  placeholder={this.state.formControls.season.placeholder}
                  value={this.state.formControls.season.value}
                  handleChange={this.changeHandler}
                  options={this.state.formControls.season.options}
                  touched={this.state.formControls.season.touched}
                  valid={this.state.formControls.season.valid}
                  errorMsg={this.state.formControls.season.errorMsg}
              />

<Checkbox  title={'Music Preference'}
  name={'music'}
  handleChange={this.changeHandler}
  value = {this.state.formControls.music.value}
  options={this.state.formControls.music.options}
  touched={this.state.formControls.music.touched}
  valid={this.state.formControls.music.valid}
  errorMsg={this.state.formControls.music.errorMsg}
/> 

<Select 
  title={'Audition City'}
  name={'audcity'}
  placeholder={this.state.formControls.audcity.placeholder}
  value={this.state.formControls.audcity.value}
  handleChange={this.changeHandler}
  options={this.state.formControls.audcity.options}
  touched={this.state.formControls.audcity.touched}
  valid={this.state.formControls.audcity.valid}
  errorMsg={this.state.formControls.audcity.errorMsg}
  multiple={this.state.formControls.audcity.multiple}
/>
<Textarea type={'text'}
                     title={'Description'}
                     name={'description'}
                     placeholder={this.state.formControls.description.placeholder}
                     value={this.state.formControls.description.value}
                     handleChange={this.changeHandler}
                     touched={this.state.formControls.description.touched}
                     valid={this.state.formControls.description.valid}
                     errorMsg={this.state.formControls.description.errorMsg}
          />
   <Button 
              action = {this.formSubmitHandler}
              type = {'primary'} 
              title = {'Submit'} 
              style={buttonStyle}
              disabled={! this.state.formIsValid}
          />
          
          <Button 
            action = {this.handleClearForm}
            type = {'secondary'}
            title = {'Clear'}
            style={buttonStyle}
          /> 
         </form>
    
    
    );

  }
}

const buttonStyle = {
  margin : '10px 10px 10px 10px'
}

            