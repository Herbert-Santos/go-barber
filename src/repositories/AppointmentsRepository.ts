import { isEqual } from 'date-fns';
import Appointment from "../models/appointment";

interface CreateAppointmentDTO {
    provider: string,
    date: Date,
}

class AppointmentsRepository {
    private appointments: Appointment[];

    constructor() {
        this.appointments = [];
    }

    public all(): Appointment[] {
        return this.appointments;
    }

    public findByDate( date: Date ): Appointment | null {
        const findAppointments = this.appointments.find( appointment =>
            isEqual( date, appointment.date ),
        );
        return findAppointments || null;
    }
    
    public create({ provider, date }: CreateAppointmentDTO ): Appointment {
        const appointment = new Appointment({ provider, date });

        this.appointments.push( appointment );
        return appointment;
    }
}

export default AppointmentsRepository;