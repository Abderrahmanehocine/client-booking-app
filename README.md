# Client Booking App

A web application built with **React** and **Tailwind CSS** for clients to book appointments and admins to manage bookings. Admins register with their business name, which is displayed as the logo in the header after login. The app is deployed on Vercel at [https://client-booking-app.vercel.app/](https://client-booking-app.vercel.app/).

## Features

### Client Features
- View and book available appointment slots
- See booking confirmation with redirect to personal bookings
- View personal bookings at `/client/bookings`

### Admin Features
- Register with business name, email, and password at `/admin/register`
- Login with business name, email, and password at `/admin/login`
- Dynamic header logo displaying the admin's business name after login
- Manage all bookings (view/cancel) at `/admin/bookings`
- Add new appointment slots at `/admin`

### Technical Details
- Built with React, React Router, and Tailwind CSS
- Uses Vite for fast development and build
- In-memory data storage (resets on app restart)
- Deployed on Vercel for live access

## Prerequisites

- **Node.js**: v22.17.1 or higher
- **npm**: v11.4.2 or higher
- A modern web browser (e.g., Chrome, Firefox)

## Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/client-booking-app.git
   cd client-booking-app
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Open** [http://localhost:5173](http://localhost:5173) in your browser.


## Usage

### Client

1. Visit [https://client-booking-app.vercel.app/](https://client-booking-app.vercel.app/)
2. Select an available slot, enter your details (first name, last name, phone, optional email), and click **Book Appointment**
3. See a green confirmation message and redirect to `/client/bookings` to view your bookings

### Admin

1. **Register** at `/admin/register`:
   - Enter your business name (e.g., "My Salon"), email, password, and confirm password
   - Redirects to `/admin/login` on success

2. **Login** at `/admin/login` with business name, email, and password (e.g., default: "Default Business", "admin@example.com", "admin123")

3. **After login**:
   - Header displays your business name as the logo
   - Access `/admin` to add new slots
   - Access `/admin/bookings` to view and cancel all bookings

## Project Structure

```
client-booking-app/
├── src/
│   ├── components/
│   │   ├── AdminLogin.jsx        # Admin login form
│   │   ├── AdminRegister.jsx     # Admin registration with business name
│   │   ├── BookingForm.jsx       # Client booking form
│   │   ├── BookingsList.jsx      # Reusable booking list component
│   ├── layout/
│   │   ├── Header.jsx            # Dynamic header with business name logo
│   │   ├── Footer.jsx            # Simple footer
│   ├── pages/
│   │   ├── AdminBookings.jsx     # Admin view for all bookings
│   │   ├── AdminDashboard.jsx    # Admin slot management
│   │   ├── ClientBookings.jsx    # Client view for personal bookings
│   │   ├── ClientHome.jsx        # Client home with booking form
│   ├── App.jsx                   # Main app with routing and state
│   ├── index.css                 # Tailwind CSS styles
├── package.json                  # Dependencies and scripts
└── README.md                     # This file
```

## Known Limitations

- **In-Memory Data**: Bookings and admin accounts reset on app restart (no backend yet)
- **Mobile UI**: Responsive design needs improvement for better mobile experience
- **Security**: Passwords stored in plain text (for learning purposes). Use a backend with proper encryption in production

## Future Improvements

- Add a backend (e.g., Firebase, Node.js) for persistent data
- Improve mobile UI responsiveness (e.g., fix layout issues, adjust font sizes)
- Enhance security with hashed passwords and authentication tokens
- Add admin features like editing slots or user management

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/your-feature`)
3. Commit changes (`git commit -m "Add your feature"`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a pull request

## Contact

For issues or suggestions, open an issue on the GitHub repository or contact me (My contact info is in my bio).