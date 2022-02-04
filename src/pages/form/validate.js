export default function validate(values) {
    let errors = {}

    if (!values.email) {
        errors.email = 'Email required';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = 'Email address is invalid';
    }

    if(!values.firstname.trim()) {
        errors.firstname = "First Name Required"
    }

    if(!values.lastname.trim()) {
        errors.lastname = "Last Name Required"
    }

    if(!values.commune.trim()) {
        errors.commune = "Commune Required"
    }

    if(!values.district.trim()) {
        errors.district = "District Required"
    }

    if(!values.city.trim()) {
        errors.city = "City/Province Required"
    }

    if(!values.housenumber.trim()) {
        errors.housenumber = "House Number Required"
    }

    if(!values.phonenumber.trim()) {
        errors.phonenumber = "Phone Number Required"
    }
    return errors;
}