import React, { SyntheticEvent } from "react"

interface InputProps {
    name: string
    type: string
    label?: string
    handleChange: Function
    value: string
    icon?: string
    placeholder?: string
    button?: boolean
    buttonValue?: string
    buttonOnClick?: Function
    message?: boolean
    messageString?: string | JSX.Element
    maxLength?: number
    hidden?: boolean
    invalidMessage?: string
}

const InputWrap = (props: InputProps): JSX.Element => {
    const hasButton: boolean = props.button || false
    const hasMessage: boolean = props.message || false
    const hasHidden: boolean = props.hidden || false
    const hasLabel: boolean = props.label ? true : false
    const maxLength: number = props.maxLength || 100
    const buttonOnClick: Function = props.buttonOnClick || function () {}

    const handleInvaild = props.invalidMessage
        ? (e: SyntheticEvent) =>
              (e.target as HTMLInputElement).setCustomValidity(
                  props.invalidMessage as string
              )
        : () => {}

    return (
        <div
            id={`${props.name}Wrap`}
            className={`inputWrap ${props.name}Wrap ${
                hasButton ? "buttonWrap" : ""
            } ${hasHidden ? "hidden" : ""}`}>
            {hasLabel && (
                <label htmlFor={props.name}>{`- ${props.label}`}</label>
            )}
            <div>
                <div className={`${props.icon}_icon icon`}></div>
                <input
                    id={props.name}
                    className={"hasIconInput"}
                    type={props.type}
                    name={props.name}
                    value={props.value}
                    onInvalid={handleInvaild}
                    maxLength={maxLength}
                    onChange={(e) => props.handleChange(e)}
                    placeholder={props.placeholder}
                    required
                />
                {hasButton && (
                    <input
                        id={`${props.name}Button`}
                        onClick={(e) => buttonOnClick(e)}
                        className="clickable"
                        type="button"
                        value={props.buttonValue}
                    />
                )}
            </div>
            {hasMessage && (
                <Message messageString={props.messageString || ""} />
            )}
        </div>
    )
}

interface MessageProps {
    messageString: string | JSX.Element
}

const Message = (props: MessageProps): JSX.Element => {
    return (
        <>
            <p className="message">{props.messageString}</p>
        </>
    )
}

export default InputWrap
