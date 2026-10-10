# Arjun S — Developer Portfolio

This is a premium, modern, responsive personal developer portfolio website designed for **Arjun S**, an aspiring Software Developer specializing in **Full-Stack Web Development, Computer Networking, Cybersecurity, and Cloud Computing** (B.E. ECE Class of 2027, Sri Eshwar College of Engineering, Pollachi, TN).

---

## 🚀 Key Highlights & Architectural Features

1. **Recruiter-Focused Visual Design**:
   - Deep black (`#06080F`) and midnight navy palette with electric blue, cyan, and violet accents.
   - Selective glassmorphism with high contrast readability.
   - Interactive network node mesh canvas in the hero section displaying live packet pulses between ad-hoc nodes.
   - Interactive Dev & Simulation Terminal featuring Resilio D2D simulation output and MERN deployment status.
   - Customizable profile avatar slot supporting dynamic browser image upload or local asset loading.

2. **Accurate Profile & Zero Fabrications**:
   - B.E. Electronics and Communication Engineering at Sri Eshwar College of Engineering (2027).
   - 200+ LeetCode problems solved with algorithmic pattern breakdowns.
   - Cisco Networking Internship & MERN Stack Development Internship.
   - No arbitrary progress bars, no fake percentages, and no broken links.

3. **Featured Engineering Projects with Deep Dive Modals**:
   - **Resilio**: Digital Twin-Driven Disaster Communication (Multi-hop D2D mesh, 4-gateway architecture, Python & NetworkX simulation results).
   - **EduSync**: College Communication & Workflow Platform (MERN, attendance tracking, OD/leave approvals, circulars with read receipts, roadmap for QR/RFID).
   - **Banking Application**: Java, JDBC, and MySQL transactional banking operations with balance integrity and input validation.
   - **Blog Platform**: React, Node.js, Express.js, MongoDB Atlas, REST APIs, and secure JWT authentication.

4. **Honest Recruiter Utilities**:
   - Configurable PDF resume path with staging instructions and fallback modal.
   - Contact form with client-side validation and automatic mailto draft generation (no pretending to send messages to unconfigured backends).
   - One-click email copy with instant feedback.
   - Social links modal displaying exact configuration points.

---

## 🛠️ How to Run Locally

```bash
# 1. Install dependencies (if not already installed)
npm install

# 2. Start the development server
npm run dev

# 3. Build for production
npm run build

# 4. Preview the production build
npm run preview
```

---

## ⚙️ How to Personalize & Configure Your Links

All personal details, social handles, resume files, and project links are centralized in a single configuration file:
👉 `src/data/portfolioData.ts`

- **Update GitHub / LinkedIn / Email**:
  Open `src/data/portfolioData.ts` and modify `PERSONAL_INFO.links`:
  ```ts
  links: {
    github: 'https://github.com/your-username',
    linkedin: 'https://linkedin.com/in/your-profile',
    email: 'your-actual-email@gmail.com',
    resumeFileName: 'Arjun_S_Resume.pdf',
    resumeAvailable: true, // change to true once you put your PDF in public/
  }
  ```

- **Add Your Resume PDF**:
  1. Save your resume as `Arjun_S_Resume.pdf`.
  2. Drop it into the `public/` directory.
  3. In `src/data/portfolioData.ts`, change `resumeAvailable: false` to `resumeAvailable: true`.

- **Add Your Photograph**:
  - You can click the camera icon on the hero avatar card to upload a picture in your browser session, or drop your photo into `public/profile.jpg` and reference it.
