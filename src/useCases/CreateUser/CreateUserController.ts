import { Request, Response } from "express";
import { CreateUserUseCase } from "./CreateUserUseCase";

export class CreateUserController {
    constructor(
        private createUserUseCase: CreateUserUseCase
    ) {}
    // Pode ser excute ou handle
    async handle(request: Request, response: Response): Promise<Response> {
        const {name, email, password} = request.body;
        try {
            await this.createUserUseCase.execute({
                name,
                email,
                password
            })
            
            return response.status(201).send()
        } catch (err) {
            return response.status(400).json({
                message: err.message || 'Unexpected error.' //Se não exitir retorna a mensagem unexpected error.
            })
        }
    }
}