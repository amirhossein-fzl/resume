import IContactForm from '@/core/types/contact_from/IContactForm';
import IValidationMessages from '@/core/types/contact_from/IValidationErrors';
import { reactive } from 'vue';

export class ValidationMessages {
    private _errors: IValidationMessages;

    public constructor() {
        this._errors = reactive({
            name: '',
            email: '',
            phone: '',
            email_or_phone: '',
            message: '',
            captcha: '',
        });
    }

    public get_error(field: keyof IValidationMessages): string {
        return this._errors[field];
    }

    public set_error(field: keyof IValidationMessages, message: string): void {
        this._errors[field] = message;
    }

    public get_errors(): IValidationMessages {
        return this._errors;
    }

    public set_errors(errors: IValidationMessages): void {
        this._errors = errors;
    }

    public is_error(field: keyof IValidationMessages): boolean {
        return this._errors[field].length != 0;
    }

    public has_error(): boolean {
        let error_counts = Object.values(this._errors).filter(
            (value: string) => {
                return value != '';
            }
        ).length;

        return error_counts != 0;
    }
}

export class Validation extends ValidationMessages {
    private data: IContactForm;
    private email_is_empty: boolean;
    private phone_is_empty: boolean;

    public constructor(contact_form: IContactForm) {
        super();
        this.data = contact_form;

        this.email_is_empty = this.is_empty(this.data.email);
        this.phone_is_empty = this.is_empty(this.data.email);
    }

    public is_empty(value: any): boolean {
        return value == undefined || value == null || value.length == 0;
    }

    private validate_name(): void {
        if (this.is_empty(this.data.name)) {
            this.set_error('name', 'validation_errors.name.required');
        } else {
            this.set_error('name', '');
        }
    }

    private validate_email(): void {
        let email_regex: RegExp =
            /([-!#-'*+/-9=?A-Z^-~]+(\.[-!#-'*+/-9=?A-Z^-~]+)*|"([]!#-[^-~ \t]|(\\[\t -~]))+")@([0-9A-Za-z]([0-9A-Za-z-]{0,61}[0-9A-Za-z])?(\.[0-9A-Za-z]([0-9A-Za-z-]{0,61}[0-9A-Za-z])?)*|\[((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|IPv6:((((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){6}|::((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){5}|[0-9A-Fa-f]{0,4}::((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){4}|(((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):)?(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}))?::((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){3}|(((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){0,2}(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}))?::((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){2}|(((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){0,3}(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}))?::(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):|(((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){0,4}(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}))?::)((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3})|(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3})|(((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){0,5}(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}))?::(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3})|(((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){0,6}(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}))?::)|(?!IPv6:)[0-9A-Za-z-]*[0-9A-Za-z]:[!-Z^-~]+)])/;

        let is_email = email_regex.test(this.data.email);
        let phone_is_empty =
            this.data.phone == undefined || this.data.phone.length == 0;

        if (!this.is_error('email_or_phone')) {
            if (this.email_is_empty && phone_is_empty) {
                this.set_error('email', 'validation_errors.email.required');
            } else if (!is_email && phone_is_empty) {
                this.set_error('email', 'validation_errors.email.invalid');
            } else {
                this.set_error('email', '');
            }
        }
    }

    private validate_phone(): void {
        if (!this.is_error('email_or_phone')) {
            if (this.phone_is_empty && this.email_is_empty) {
                this.set_error('phone', 'validation_errors.phone.required');
            } else {
                this.set_error('phone', '');
            }
        }
    }

    private validate_email_or_phone(): void {
        if (this.phone_is_empty && this.phone_is_empty) {
            this.set_error(
                'email_or_phone',
                'validation_errors.email_or_phone'
            );
        } else {
            this.set_error('email_or_phone', '');
        }
    }

    private validate_message(): void {
        if (this.is_empty(this.data.message)) {
            this.set_error('message', 'validation_errors.message.required');
        } else {
            this.set_error('message', '');
        }
    }

    private validate_recaptcha(): void {
        const captcha_token =
            // @ts-ignore
            window.grecaptcha != undefined
                ? // @ts-ignore
                  window.grecaptcha.getResponse()
                : '';

        if (this.is_empty(captcha_token)) {
            this.set_error('captcha', 'validation_errors.captcha.required');
        } else {
            this.set_error('captcha', '');
        }
    }

    public validate() {
        this.validate_name();
        this.validate_email_or_phone();
        this.validate_email();
        this.validate_phone();
        this.validate_message();
        this.validate_recaptcha();
    }
}
