This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.



# BankDetailsForm Component

The `BankDetailsForm` is a React component for collecting and submitting bank details including card number, card holder name, branch name, mobile number, and email. This form uses Supabase as the backend for storing the data.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Component Structure](#component-structure)
- [State Variables](#state-variables)
- [Form Validation](#form-validation)
- [Form Submission](#form-submission)
- [Styling](#styling)
- [Dependencies](#dependencies)

## Installation

To use the `BankDetailsForm` component, you need to have Node.js and npm installed. Then follow these steps:

1. Clone the repository:

    ```bash
    git clone <repository-url>
    cd <repository-directory>
    ```

2. Install the dependencies:

    ```bash
    npm install
    ```

3. Set up Supabase:

    - Create a Supabase account and project.
    - Get your Supabase URL and API Key from the project settings.
    - Create a `.env` file in the root directory and add the following environment variables:


    ```env
    
    NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
    NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
    ```

4. Start the development server:

    ```bash
    npm run dev
    ```

## Usage

You can use the `BankDetailsForm` component in your Next.js application as follows:

```jsx
import BankDetailsForm from "@/components/BankDetailsForm";

export default function Home() {
  return (
    <div>
      <BankDetailsForm />
    </div>
  );
}
```

## Component Structure

The `BankDetailsForm` component is structured as follows:

- State variables to handle form inputs and errors.
- A form with input fields for card number, card holder name, branch name, mobile number, and email.
- Form validation to check for required fields and proper formatting.
- Form submission handler to send data to Supabase.
  
## State Variables

- `cardNumber` : Stores the card number input.
- `cardHolderName` : Stores the card holder name input.
- `branchName` : Stores the branch name input.
- `mobileNumber` : Stores the mobile number input.
- `email` : Stores the email input.
- `errors` : Stores validation errors for each field.
- `isSubmitted` : Indicates if the form has been successfully submitted.

## Form Validation

The `validateForm` function checks for:

- Required fields: card number, card holder name, branch name, mobile number, and email.
- Mobile number must be 10 digits.
- Email must be in a valid format.

## Form Submission

The `handleSubmit` function:

1. Prevents the default form submission behavior.
2. Validates the form and sets errors if any.
3. Sends the form data to Supabase if there are no validation errors.
4. Clears the form fields upon successful submission.

## Styling

The component uses Tailwind CSS for styling. Ensure you have Tailwind CSS set up in your project.

## Dependencies

- **React**
- **Supabase**
- **Next.js**
- **Tailwind CSS**


## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
