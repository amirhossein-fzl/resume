export default interface IResult {
    show: boolean;
    status: "loading" | "success" | "error";
    message: string;
}
