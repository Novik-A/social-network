import React from "react";
import styles from "./FormsControls.module.css";

type InputType = {
    name: string
    onBlur: ()=>void
    onChange: ()=>void
    onDragStart: ()=>void
    onDrop: ()=>void
    onFocus: ()=>void
    value: string
}
type MetaType = {
    active: boolean
    asyncValidating: boolean
    autofilled: boolean
    dirty: boolean
    dispatch: ()=>void
    error: string
    form: string
    initial: undefined
    invalid: boolean
    pristine: boolean
    submitFailed: boolean
    submitting: boolean
    touched: boolean
    valid: boolean
    visited: boolean
    warning: undefined
}
type PropsType = {
    input: InputType
    meta: MetaType
    placeholder: string
}
export const Textarea = ({input, meta,...props}: PropsType) => {
    const hasError = meta.touched && meta.error
    return <>
        <div className={styles.formControl + ' ' + (hasError ? styles.error : '')}>
            <div>
                <textarea {...input} {...props} />
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    </>
}

export const Input = ({input, meta,...props}: PropsType) => {
    const hasError = meta.touched && meta.error
    return <>
        <div className={styles.formControl + ' ' + (hasError ? styles.error : '')}>
            <div>
                <input {...input} {...props} />
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    </>
}