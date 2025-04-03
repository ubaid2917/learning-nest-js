import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from "@nestjs/common";
import { ObjectSchema } from "joi";

@Injectable()
export class JoiValidationPipe implements PipeTransform {
    constructor(private schema: ObjectSchema) {}

    transform(value: Record<string, any>) {
        const { error, value: validatedValue } = this.schema.validate(value, { convert: false });  // ✅ Prevent auto conversion

        if (error) {
         
            throw new BadRequestException(error.details.map(err => err.message.replace(/\"/g, "")));   // actual logs
        }

        return validatedValue;  // ✅ Return validated data if no errors
    }
}
