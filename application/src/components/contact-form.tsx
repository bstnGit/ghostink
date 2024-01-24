"use client";

import { useState, useEffect, ChangeEvent, FormEvent } from "react";
import Image from "next/image";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { PasswordInput } from "./ui/password-input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { createUser } from "@/database/auth";
import { validateEmail, validatePassword } from "@/utils/validate-data";
import { addUser, addOrder } from "@/database/service";
import { User } from "@/models/user";
import { Order } from "@/models/order";
import { Checkbox } from "@/components/ui/checkbox";
import {
  SelectValue,
  SelectTrigger,
  SelectItem,
  SelectContent,
  Select,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function ContactForm() {
  const [formData, setFormData] = useState({
    visibleName: "",
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    password: "",
    serviceType: "",
    academicSubject: "",
    programmingLanguage: "",
    budget: "",
    wordCountText: "",
    wordCount: "",
    deliveryDate: "",
    additionalInstructions: "",
    createAccountChecked: false,
    createAccountText: "",
    acceptTermsChecked: false,
    documents: null,
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
    ...prevFormData,
    [name]: value,
  }));

    console.log(value);
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (name: string, checked: boolean) => {
    setFormData((prevFormData) => ({
    ...prevFormData,
    [name]: checked,
    }));
  };

  useEffect(() => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      wordCountText: formData.serviceType !== "presentation" ? "Page Count" : "Slide Count",
      }));
  }, [formData.serviceType]);

  useEffect(() => {
    let text: string = "";

    if(formData.createAccountChecked){
      text = "Seamless Communication, Exclusive Offers, and Efficient Order Tracking!";
    }else{
      text = "No Accout? No Problem! Seamless Communication and Efficient Order Tracking via E-Mail!";
    }

    setFormData((prevFormData) => ({
      ...prevFormData,
      createAccountText: text,
    }));
  }, [formData.createAccountChecked]);

  useEffect(() => {
    document.getElementById("count")?.setAttribute("placeholder", "Enter " + formData.wordCountText.toLowerCase());
  }, [formData.wordCountText]);

  const errors = {
    email: {
      message: 'Invalid email address',
    },
  };

  async function onSubmit() {
    if(!validateEmail(formData.email)) {

    }

    if(!validatePassword(formData.password)) {

    }

    const newUserCredentials = await createUser(formData.email, formData.password);
    const uid = newUserCredentials.user.uid;

    const user: User = new User(uid, formData.visibleName, formData.firstName, formData.lastName, formData.email, formData.phoneNumber);
    addUser(user);

    const order: Order = new Order()
  }

  return (
    <div className="flex h-screen">
      <Card className="m-auto max-w-[28rem] space-y-2">
        <CardHeader>
          <div className="space-y-2 text-center ">
            <h1 className="text-3xl font-bold">
              Ghost<span className="text-indigo-400">Ink</span>.
            </h1>
            <p className="text-gray-500 dark:text-gray-400">
              Fast, reliable and anonym
            </p>
          </div>
        </CardHeader>

        <CardContent>
          <div className="space-y-4 min-w-96">
            {/* Visible Name */}
            <div className="space-y-2">
              <Label htmlFor="visible-name">
                Visible Name <span className="text-red-600">*</span>
              </Label>
              <Input name="visibleName" id="visible-name" placeholder="Guest" value={ formData.visibleName } onChange={ handleInputChange } required />
            </div>

            { formData.createAccountChecked && (
            <div className="flex grid-cols-2 items-stretch space-x-2">
              {/* First Name */}
              <div className="space-y-2">
                <Label htmlFor="first-name">First Name</Label>
                <Input name="firstName" id="first-name" placeholder="John" value={ formData.firstName } onChange={ handleInputChange } />
              </div>

              {/* Last Name */}
              <div className="space-y-2">
                <Label htmlFor="last-name">Last Name</Label>
                <Input name="lastName" id="last-name" placeholder="Doe" value={ formData.lastName } onChange={ handleInputChange } />
              </div>
            </div>
            )}

            {/* Email */}
            <div className="space-y-2">
              <Label htmlFor="email">Email <span className="text-red-600">*</span></Label>
              <Input name="email" id="email" placeholder="example@domain.com" type="email" value={ formData.email } onChange={ handleInputChange } required />
            </div>

            { formData.createAccountChecked && (
            <div>
              {/* Phone Number */}
              <div className="space-y-2">
                <Label htmlFor="phone-number">Phone Number</Label>
                <Input name="phoneNumber" id="phone-number" placeholder="+49 1234 5678900" type="text" value={ formData.phoneNumber } onChange={ handleInputChange } />
              </div>

              {/* Password */}
              <div className="space-y-2">
                <Label htmlFor="password">Password <span className="text-red-600">*</span></Label>
                <PasswordInput name="password" id="password" placeholder="Your secure password" value={ formData.password } onChange={ handleInputChange} required />
              </div>
            </div>
            )}

            {/* Service Type */}
            <div className="space-y-2">
              <Label htmlFor="service-type">
                Service Type <span className="text-red-600">*</span>
              </Label>
              <Select name="serviceType" value={ formData.serviceType }  onValueChange={(value) =>  handleSelectChange("serviceType", value) } required>

                <SelectTrigger aria-label="Service Type" id="service-type">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="diploma-thesis">Diploma Thesis</SelectItem>
                  <SelectItem value="master-thesis">Master Thesis</SelectItem>
                  <SelectItem value="bachlor-thesis">Bachlor Thesis</SelectItem>
                  <SelectItem value="research-paper">Research Paper</SelectItem>
                  <SelectItem value="case study">Case Study</SelectItem>
                  <SelectItem value="presentation">Presentation</SelectItem>
                  <SelectItem value="written-assignment">Assignment</SelectItem>
                  <SelectItem value="school-work">School Work</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Academic Subjects */}
            <div className="space-y-2">
              <Label htmlFor="academic-subject">Academic Subject <span className="text-red-600">*</span></Label>
              <Select name="academicSubject" value={ formData.academicSubject } onValueChange={(value) =>  handleSelectChange("academicSubject", value) } required>
                <SelectTrigger aria-label="Academic Subject" id="academic-subject">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="computer-science">Computer Science</SelectItem>
                  <SelectItem value="mathmatics">Mathmatics</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Programming Language */}
            { formData.academicSubject === "computer-science" && (
              <div className="space-y-2">
                <Label htmlFor="programming-language">Programming Langugage <span className="text-red-600">*</span></Label>
                <Select name="programmingLanguage" value={ formData.programmingLanguage } onValueChange={(value) =>  handleSelectChange("programmingLanguage", value) } required>
                  <SelectTrigger
                    aria-label="Programming Language"
                    id="programming-language"
                  >
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="java">Java</SelectItem>
                    <SelectItem value="c#">C#</SelectItem>
                    <SelectItem value="c">C</SelectItem>
                    <SelectItem value="cpp">C++</SelectItem>
                    <SelectItem value="python">Python</SelectItem>
                    <SelectItem value="javascript/html/css">Javascript / HTML / CSS</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            )}

            {/* Buget */}
            <div className="space-y-2">
              <Label htmlFor="budget">
                Budget <span className="text-red-600">*</span>
              </Label>
              <Select name="budget" value={ formData.budget } onValueChange={(value) =>  handleSelectChange("budget", value) } required>
                <SelectTrigger aria-label="Budget" id="budget">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="50-200">50$ - 200$</SelectItem>
                  <SelectItem value="200-500">200$ - 500$</SelectItem>
                  <SelectItem value="500-1000">500$ - 1000$</SelectItem>
                  <SelectItem value="1000-2000">1.000$ - 2.000$</SelectItem>
                  <SelectItem value="2000-5000">2.000$ - 5.000$</SelectItem>
                  <SelectItem value="5.000-10.000">5.000$ - 10.000$</SelectItem>
                  <SelectItem value="10.000-20.000">10.000$ - 20.000$</SelectItem>
                  <SelectItem value="20.000-50.000">20.000$ - 50.000$</SelectItem>
                  <SelectItem value="50.000-100.000">50.000$ - 100.000$</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Word Count */}
            { formData.wordCountText.length !== 0 && (
              <div className="space-y-2">
                <Label htmlFor="count">{ formData.wordCountText }</Label>
                <Input name="wordCount" id="count" value={ formData.wordCount } onChange={ handleInputChange } required />
              </div>
            )}

            {/* Delivery Date */}
            <div className="space-y-2">
              <Label htmlFor="delivery-date">Delivery Date <span className="text-red-600">*</span></Label>
              <Input name="deliveryDate" id="delivery-date" type="date" value={ formData.deliveryDate } onChange={ handleInputChange } required />
            </div>

            {/* Additional Instructions */}
            <div className="space-y-2">
              <Label htmlFor="additional-instructions">Instructions <span className="text-red-600">*</span></Label>
              <Textarea name="additionalInstructions" className="min-h-[100px]" id="additional-instructions" placeholder="Enter additional instructions" value={ formData.additionalInstructions } onChange={ handleInputChange } required/>
            </div>

            {/* Documents */}
            <div className="space-y-2">
              <Label htmlFor="documents">Documents</Label>
              <Input id="documents" type="file" multiple />
            </div>

            {/* Create Account */}
            <div className="items-top flex space-x-2">
              <Checkbox id="create-account-checkbox" checked={ formData.createAccountChecked } onCheckedChange={ (checked: boolean) => handleCheckboxChange('createAccountChecked', checked) } />
              <div className="grid gap-1.5 leading-none">
                <label htmlFor="create-account-checkbox" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  Create Your Account!
                </label>
                <p className="text-sm text-muted-foreground">
                  { formData.createAccountText }
                </p>
              </div>
            </div>

            {/* Accept Terms of Service */}
            <div className="items-top flex space-x-2">
              <Checkbox id="accept-terms-checkbox" checked={ formData.acceptTermsChecked } onCheckedChange={ (checked: boolean) => handleCheckboxChange('acceptTermsChecked', checked) } />
              <div className="grid gap-1.5 leading-none">
                <label htmlFor="accept-terms-checkbox" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  Accept terms and conditions
                </label>
                <p className="text-sm text-muted-foreground">
                  You agree to our Terms of Service and Privacy Policy.
                </p>
              </div>
            </div>


            {/* Submit */}
            <Button className="w-full" type="submit" onClick={ onSubmit }>
              Submit
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
