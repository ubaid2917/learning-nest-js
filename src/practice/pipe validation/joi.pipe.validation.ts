import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from "@nestjs/common";
import { ObjectSchema } from "joi";

@Injectable()
export class JoiValidationPipe implements PipeTransform {
    constructor(private schema: ObjectSchema) {}

    transform(value: Record<string, any>) {
        const { error, value: validatedValue } = this.schema.validate(value, { abortEarly: false });

        if (error) {
            console.log('Validation Errors:', error.details.map(err => err.message));  // ✅ Log the actual error
            throw new BadRequestException(error.details.map(err => err.message));
        }

        return validatedValue;  // ✅ Return validated data
    }
}
