import React from 'react'
import MyComponent from './MyComponent'

const ComponentExample:React.FC = () => {
    return (
        <div>
            <MyComponent 
                            title="Hola Mundo"
                            favoriteNumber={3}
                            active={true}
                            sayHello ={(name)=>'hello ' + name}
                            addres={{street:"Av Grau",city:"London"}}
                            user={{username:'jonathan',fullname:'bustamante',age:33}}
                            /> 
        </div>
    )
}

export default ComponentExample
