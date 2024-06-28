import { useState } from "react";
import { Professor } from "../../../types/Professor";

interface ProfessorCardProps {
  professor: Professor;
}


const people = [
  {
    name: 'Allysson Allex de Paula Araújo',
    email: 'allysson.araujo@ufca.edu.br',
    image:
      'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    lattes: 'http://lattes.cnpq.br/1768955171390815',
  },
  {
    name: 'Dorgival Pereira da Silva Netto',
    email: 'kristen.ramos@example.com',
    image:
      'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Paola Rodrigues Godoy Accioly',
    email: 'ted.fox@example.com',
    image:
      'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
{
  name: 'Ricardo Ferreira Vilela',
  email: 'ted.fox@example.com',
  image:
    'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
}
 
]



export function ProfessorCard({ professor }: ProfessorCardProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative border-2 border-red-500 bg-gray-50 max-w-xs h-full rounded-lg overflow-hidden shadow-lg transition-shadow duration-500 hover:shadow-2xl"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{fontFamily: 'Belezza'}}
    >
      <div className="relative" style={{color: '#F6BA19'}}>
      <ul className="divide-y divide-black-200">
    </ul>
        <li key={professor.email} className="py-4 flex" style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }} >
         <img className="h-10 w-10 rounded-full" style={{borderRadius: '50%', width:'250px'}} src={professor.image} alt="" />
          <div className="ml-3" style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
            <p className="text-sm font-medium text-gray-900 mb-0" style={{marginBottom:'5px'}}>{professor.name}</p>
            <p className="text-sm text-gray-500 mt-0" style={{marginTop:0, marginBottom:'5px'}}>{professor.title}</p>
            <p className="text-sm text-gray-500 mt-0" style={{marginTop:0}}>{professor.email}</p>
            <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'row', alignItems: 'center', gap: '15px' }}>
              <a href={professor.lattes} target="_blank">
                <img className="h-10 w-10 rounded-full" src={'./lattes2.png'} alt="" width={20} />
              </a>
              <a href={professor.github} target="_blank">
                <img className="h-10 w-10 rounded-full" src={'./github.png'} alt="" width={20} />
              </a>
            </div>
          </div>
        </li>
            
              

           
          </div>
        </div>
      )}
  
