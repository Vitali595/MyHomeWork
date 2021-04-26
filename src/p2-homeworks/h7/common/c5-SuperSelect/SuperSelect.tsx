import React, {SelectHTMLAttributes, DetailedHTMLProps, ChangeEvent} from 'react'
import s from "./SuperSelect.module.css"

type DefaultSelectPropsType = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>

type SuperSelectPropsType = DefaultSelectPropsType & {
    options?: string[]
    onChangeOption?: (option: string) => void
}

const SuperSelect: React.FC<SuperSelectPropsType> = (
    {
        options,
        onChange, onChangeOption,
        ...restProps
    }
) => {
    const mappedOptions: JSX.Element[] = options ? options.map((o, i) => ( // map options with key
        <option key={i} onChange={() => onChangeCallback} value={o}>{o}</option>)) : []

    const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
        // onChange, onChangeOption
        if (onChangeOption) {
            onChangeOption(e.currentTarget.value)
        }

    }

    return (
        <div className={s.mySelect}>
            <select onChange={onChangeCallback} {...restProps}>
                {mappedOptions}
            </select>
        </div>

    )
}

export default SuperSelect
