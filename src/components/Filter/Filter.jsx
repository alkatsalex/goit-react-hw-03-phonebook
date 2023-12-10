import css from "./Filter.module.css"

export default function Filter({ onChange }) {
    return (
        <div>
            <label htmlFor="filterInput">
                <h3 className={css.title}>Serch contact🔎</h3>
            </label>
            <input className={css.input} type="text" name="filter" onChange={e => onChange(e.target.value)}/>
        </div>
    )
}