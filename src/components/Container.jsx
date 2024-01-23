
// children, es un propiedad que recibe los hijos del componente
const Container = ({children}) => {

    return (
        <div className="container p-4">
            <div className="col-md-4 offset-md-4">
                {children}
            </div>
        </div>
    );
};

export default Container;
