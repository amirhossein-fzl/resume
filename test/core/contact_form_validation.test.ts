import { test, expect } from "vitest"
import { Validation } from "@/core/contact-from-validation"

test("Validation class test", () => {
    let data = {
        name: "",
        email: "",
        phone: "",
        message: "",
    };
    let validation = new Validation(data);

    validation.validate();

    expect(validation.has_error()).toBe(true);
    expect(validation.is_empty(data.name)).toBe(true);
    expect(validation.is_error("name")).toBe(true);
    expect(validation.is_error("email_or_phone")).toBe(true);
    expect(validation.is_error("message")).toBe(true);
    
    data.name = "Amirhossein";
    validation = new Validation(data);
    validation.validate();
    
    expect(validation.is_error("name")).toBe(false);
    
    data.email = "amirhossein95b@gmail.com";
    validation = new Validation(data);
    validation.validate();
    
    expect(validation.is_error("email_or_phone")).toBe(false);
    
    data.email = "amirhossein95b";
    validation = new Validation(data);
    validation.validate();

    expect(validation.is_error("email")).toBe(true);
    
    data.message = "Hello, World!";
    validation = new Validation(data);
    validation.validate();

    expect(validation.is_error("message")).toBe(false);

    expect(validation.is_error('email') || validation.is_error('email_or_phone')).toBe(true);
    expect(validation.is_error('phone') || validation.is_error('email_or_phone')).toBe(false);
});
