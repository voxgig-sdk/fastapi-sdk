package core

type FastapiError struct {
	IsFastapiError bool
	Sdk              string
	Code             string
	Msg              string
	Ctx              *Context
	Result           any
	Spec             any
}

func NewFastapiError(code string, msg string, ctx *Context) *FastapiError {
	return &FastapiError{
		IsFastapiError: true,
		Sdk:              "Fastapi",
		Code:             code,
		Msg:              msg,
		Ctx:              ctx,
	}
}

func (e *FastapiError) Error() string {
	return e.Msg
}
