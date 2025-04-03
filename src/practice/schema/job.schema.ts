import * as joi from "joi"; 
 
enum JobType {
    FULL_TIME = 'full_time',
    PART_TIME = 'part_time',
    INTERNSHIP = 'internship'
}

export const createJobSchema = joi.object({
    companyName: joi.string().required(),
    title: joi.string().required(),
    location: joi.string().required(),
    salary: joi.number().positive().required(),
    experience: joi.number().integer().min(0).required(),
    email: joi.string().email().required(),
    type: joi.string().valid(...Object.values(JobType)).required(),
    tags: joi.array().items(joi.string()).optional(),
    isActive: joi.boolean().optional()
});


