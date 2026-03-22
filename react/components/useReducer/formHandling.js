import React, { useReducer } from 'react';


// Certainly! Let's walk through an example of managing form inputs with validation using useReducer,
// which is more suited for complex state logic that depends on multiple values or actions. This will show how useReducer is ideal
// for managing multiple form fields, their values, validation rules, and error messages.

// Example: Form Handling with Validation Using useReducer
// In this example, we will manage a form with multiple fields (name, email, and password).
//  Each field will have validation rules, and we'll track the form submission state.

// Initial state of the form
const initialState = {
  name: '',
  email: '',
  password: '',
  errors: {
    name: '',
    email: '',
    password: ''
  },
  isSubmitting: false,
};

// Reducer function that handles actions related to form inputs and validation
const formReducer = (state, action) => {
  switch (action.type) {
    case 'SET_FIELD':
      return {
        ...state,
        [action.field]: action.value,
        errors: {
          ...state.errors,
          [action.field]: '', // Reset error when field is changed
        },
      };
    case 'SET_ERROR':
      return {
        ...state,
        errors: {
          ...state.errors,
          [action.field]: action.message,
        },
      };
    case 'SUBMIT':
      return { ...state, isSubmitting: true };
    case 'SUBMIT_SUCCESS':
      return { ...state, isSubmitting: false };
    case 'SUBMIT_ERROR':
      return { ...state, isSubmitting: false };
    default:
      return state;
  }
};

const Form = () => {
  const [state, dispatch] = useReducer(formReducer, initialState);

  // Validation function
  const validateForm = () => {
    let isValid = true;

    // Validate name
    if (state.name.trim() === '') {
      dispatch({
        type: 'SET_ERROR',
        field: 'name',
        message: 'Name is required.',
      });
      isValid = false;
    }

    // Validate email
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(state.email)) {
      dispatch({
        type: 'SET_ERROR',
        field: 'email',
        message: 'Invalid email format.',
      });
      isValid = false;
    }

    // Validate password
    if (state.password.length < 6) {
      dispatch({
        type: 'SET_ERROR',
        field: 'password',
        message: 'Password must be at least 6 characters.',
      });
      isValid = false;
    }

    return isValid;
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      dispatch({ type: 'SUBMIT' });

      // Simulate a successful form submission (e.g., API call)
      setTimeout(() => {
        dispatch({ type: 'SUBMIT_SUCCESS' });
        alert('Form submitted successfully!');
      }, 1000);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            value={state.name}
            onChange={(e) =>
              dispatch({ type: 'SET_FIELD', field: 'name', value: e.target.value })
            }
          />
          {state.errors.name && <p style={{ color: 'red' }}>{state.errors.name}</p>}
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="text"
            value={state.email}
            onChange={(e) =>
              dispatch({ type: 'SET_FIELD', field: 'email', value: e.target.value })
            }
          />
          {state.errors.email && <p style={{ color: 'red' }}>{state.errors.email}</p>}
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            value={state.password}
            onChange={(e) =>
              dispatch({ type: 'SET_FIELD', field: 'password', value: e.target.value })
            }
          />
          {state.errors.password && <p style={{ color: 'red' }}>{state.errors.password}</p>}
        </div>

        <div>
          <button type="submit" disabled={state.isSubmitting}>
            {state.isSubmitting ? 'Submitting...' : 'Submit'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
