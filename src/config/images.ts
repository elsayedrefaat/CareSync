// ─── Hero ────────────────────────────────────────────────────────────────────
import heroClinicInterior from '../assets/images/hero/clinic-interior.jpg'

// ─── Services ────────────────────────────────────────────────────────────────
import servicesGeneralCheckup  from '../assets/images/services/general-checkup.jpg'
import servicesSurgery         from '../assets/images/services/surgery.jpg'
import servicesDentalCare      from '../assets/images/services/dental-care.jpg'
import servicesLaboratory      from '../assets/images/services/laboratory.jpg'
import servicesPrimaryCare     from '../assets/images/services/primary-care.jpg'
import servicesChronicDisease  from '../assets/images/services/chronic-disease.jpg'

// ─── Appointment ─────────────────────────────────────────────────────────────
import appointmentDoctorPortrait from '../assets/images/appointment/doctor-portrait.jpg'

// ─── Sessions ────────────────────────────────────────────────────────────────
import sessionsInPerson      from '../assets/images/sessions/in-person.jpg'
import sessionsHeartTreatment from '../assets/images/sessions/heart-treatment.jpg'
import sessionsFollowUp      from '../assets/images/sessions/follow-up.jpg'

// ─── Treatment ───────────────────────────────────────────────────────────────
import treatmentConsultation from '../assets/images/treatment/consultation.jpg'

// ─── About ───────────────────────────────────────────────────────────────────
import aboutClinicTeam from '../assets/images/about/clinic-team.jpg'

// ─── Doctors ─────────────────────────────────────────────────────────────────
import doctorSarahJohnson from '../assets/images/doctors/sarah-johnson.jpg'
import doctorMarkWilliams from '../assets/images/doctors/mark-williams.jpg'
import doctorEmilyChen    from '../assets/images/doctors/emily-chen.jpg'
import doctorAhmedHassan  from '../assets/images/doctors/ahmed-hassan.jpg'

// ─────────────────────────────────────────────────────────────────────────────
// All image references for the application.
// Components must import from this file — never import image files directly.
// ─────────────────────────────────────────────────────────────────────────────
export const images = {
  hero: {
    clinicInterior: heroClinicInterior,
  },

  services: {
    generalCheckup:  servicesGeneralCheckup,
    surgery:         servicesSurgery,
    dentalCare:      servicesDentalCare,
    laboratory:      servicesLaboratory,
    primaryCare:     servicesPrimaryCare,
    chronicDisease:  servicesChronicDisease,
  },

  appointment: {
    doctorPortrait: appointmentDoctorPortrait,
  },

  sessions: {
    inPerson:      sessionsInPerson,
    heartTreatment: sessionsHeartTreatment,
    followUp:      sessionsFollowUp,
  },

  treatment: {
    consultation: treatmentConsultation,
  },

  about: {
    clinicTeam: aboutClinicTeam,
  },

  doctors: {
    sarah: doctorSarahJohnson,
    mark:  doctorMarkWilliams,
    emily: doctorEmilyChen,
    ahmed: doctorAhmedHassan,
  },

  // Thumbnails reuse the same local files; CSS handles sizing.
  doctorsThumbs: {
    sarah: doctorSarahJohnson,
    mark:  doctorMarkWilliams,
    emily: doctorEmilyChen,
  },
} as const
