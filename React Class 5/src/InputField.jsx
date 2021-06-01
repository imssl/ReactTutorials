export default function InputField(props) {

    const classValues=`col-md-${props.size} pr-md-1`

    return (
        <div className={classValues}>
            <label htmlFor={props.htmlFor}>{props.label}</label>
            <input type={props.type} class="form-control" placeholder={props.placeholder} disabled={props.disabled}/>
        </div>        
    )
}