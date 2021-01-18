import Appointment from '../models/Appointment';
import AppointmentsRepository from '../repositories/AppointmentsRepository';
import { startOfHour } from 'date-fns';

/**
 * Recebimento dads informações
 * Tratativa de erros/excessões
 * Acesso ao repositório
 */

interface Request {
    provider: string;
    date: Date;
}

/**
 * Dependency Inversion (SOLID)
 * 
 * Single Responsability Principle
 * Dependdency Invertion Principle
 */

class CreateAppointmentService {
    private appointmentsRepository: AppointmentsRepository;

    constructor(appointmentsRepository: AppointmentsRepository) {
        this.appointmentsRepository = appointmentsRepository;
    }

    public execute({ provider, date }: Request): Appointment {
        const appointmentDate = startOfHour(date);

        const findApointmentInSameDate = this.appointmentsRepository.finfByDate(
            appointmentDate
        );

        if (findApointmentInSameDate) {
            throw Error('This appointment is already booked');
        }

        const appointment = this.appointmentsRepository.create({
            provider,
            date: appointmentDate
        });

        return appointment;
    }
}

export default CreateAppointmentService;