import Appointment from '../models/Appointment';
import { isEqual } from 'date-fns';

interface CreateAppontmentDTO {
    provider: string;
    date: Date;
}

class AppointmentsRepository {
    private appointments: Appointment[];

    constructor() {
        this.appointments = [];
    }

    public create({ provider, date }: CreateAppontmentDTO): Appointment {
        const appointment = new Appointment({ provider, date });

        this.appointments.push(appointment);

        return appointment;
    }

    public finfByDate(date: Date): Appointment | null {
        const findApointment = this.appointments.find(appointment =>
            isEqual(date, appointment.date),
        );

        return findApointment || null;
    }

    public all(): Appointment[] {
        return this.appointments;
    }
}

export default AppointmentsRepository;