enum JobType {
    FULL_TIME = 'full_time',
    PART_TIME = 'part_time',
    INTERNSHIP = 'internship'
}

export class CreateJobDto {

    companyName: string;
    title: string;
    location: string;
    salary: number;
    experience: number;
    email: string;
    type: JobType;
    tags?: string[];
    isActive?: boolean;

}