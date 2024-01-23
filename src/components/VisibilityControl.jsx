
const VisibilityControl = ({ setShowCompleted, cleanTasks, isChecked}) => {

    function handleDelete (){
        if( window.confirm('Are you sure you want to delete it?')){
            cleanTasks()
        }
    }

    return (
        <div className="d-flex justify-content-between bg-secondary text-white text-center p-2 border-secondary">
            {/* setShowCompleted es una función a la que le pasamos el valor actual del checkBox */}
            <div className="form-check form-switch d-flex gap-2">
                <input 
                    className="form-check-input"
                    type="checkbox" 
                    onChange={e => setShowCompleted(e.target.checked)}
                    checked={isChecked}
                /> 
                <label>Show Tasks Done</label>
            </div>

            <button onClick={handleDelete} className="btn btn-danger btn-sm">
                Clean tasks
            </button>
        </div>
    );
};

export default VisibilityControl;
