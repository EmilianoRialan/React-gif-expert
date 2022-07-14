import { useState } from 'react';
import { AddCategory, GifGrid} from './components';

export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['One Punch', 'Dragon ball']);

  const onAddCategory = (newCategory) => {
    //categories.push('nueva'); evitar push 
    //  'nueva' ,...categories se ingresa al inicio
    if (categories.includes(newCategory)) return;//es sencil case asi que hay que hacer otra validacion de letras  
    setCategories([newCategory, ...categories]);
  }


  return (
    <>
      {/* Titulo */}
      <h1>GifExpertApp</h1>
      {/* Input */}
      <AddCategory onNewCategory={(event) => onAddCategory(event)} />
      {/* Listado de GIF */}
        {
          categories.map((category) => (
            <GifGrid
              key={category}
              category={category}
            />
          ))
        }
    </>
  )
}
