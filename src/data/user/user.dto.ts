export class CreateUserDTO {
    // tslint:disable-next-line: variable-name
    readonly first_name: string;
    // tslint:disable-next-line: variable-name
    readonly last_name: string;
    // tslint:disable-next-line: variable-name
    readonly email: string;
    // tslint:disable-next-line: variable-name
    readonly password: string;
    // tslint:disable-next-line: variable-name
    readonly gender?: string;
    // tslint:disable-next-line: variable-name
    readonly profile_picture: string;
    // tslint:disable-next-line: variable-name
    readonly created_at: Date;
}
