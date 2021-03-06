import { Router } from 'express';
import { parseISO } from 'date-fns';
import AppointmentsRepository from '../repositories/AppointmentsRepository';
import CreateAppointmentService from '../service/CreateAppointmentService';

const appointmentsRouter = Router();

const appointmentsRepository = new AppointmentsRepository();

// Rota: Receber a requisição, chamar outro arquivo, devolver uma resposta

// DTO - Data Transfer Object

// http://localhost:3333/appointments

appointmentsRouter.get('/', (request, response) => {
    const appointments = appointmentsRepository.all();

    return response.json(appointments);
});

appointmentsRouter.post('/', (request, response) => {
    try {
        const { provider, date } = request.body;

        const parsedDate = parseISO(date);

        const createAppointmentService = new CreateAppointmentService(appointmentsRepository);

        const appointment = createAppointmentService.execute({ provider, date: parsedDate });

        return response.json(appointment)
    } catch (err) {
        return response.status(400).json({ error: err.message });
    }
});

export default appointmentsRouter;