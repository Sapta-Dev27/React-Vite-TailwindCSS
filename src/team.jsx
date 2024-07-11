import Saptarshi from './assests/Saptarshi.jpg'
import Logo from './assests/DEVx AVES.png'
import Sujay from './assests/Sujay Dey.jpg'
import Anirban from './assests/Anirban.png'
import Priyobrata from './assests/Priyobrata.png'

const people = [
  {
    name: 'Saptarshi Paul',
    role: 'Front - End Developer',

      
  },
  
]
const people2 = [
  {
    name: ' Priyobrata Mondal',
    role: 'Full Stack Developer',
    
    
  },
  
]
const people3 = [
  {
    name: ' Anirban Bandopadhay',
    role: ' Web3 and ML',
  
  },
  
]
const people4 = [
  {
    name: ' Sujay Dey',
    role: 'App Developer',
  
  },
  
]

export default function Example7() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Meet Our Team</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
          At DEVx AVES , we are a dynamic group of passionate developers, committed to pushing the boundaries of technology and innovation.
          </p>
        </div>
        <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
          {people.map((person) => (
            <li key={person.name}>
              <div className="flex items-center gap-x-6">
                <img alt="" src={Saptarshi} className="h-16 w-16 rounded-full" />
                <div>
                  <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{person.name}</h3>
                  <p className="text-sm font-semibold leading-6 text-indigo-600">{person.role}</p>
                </div>
              </div>
            </li>
          ))}
          {people2.map((person) => (
            <li key={person.name}>
              <div className="flex items-center gap-x-6">
                <img alt="" src={Priyobrata} className="h-16 w-16 rounded-full" />
                <div>
                  <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{person.name}</h3>
                  <p className="text-sm font-semibold leading-6 text-indigo-600">{person.role}</p>
                </div>
              </div>
            </li>
          ))}
          {people3.map((person) => (
            <li key={person.name}>
              <div className="flex items-center gap-x-6">
                <img alt="" src={Anirban} className="h-16 w-16 rounded-full" />
                <div>
                  <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{person.name}</h3>
                  <p className="text-sm font-semibold leading-6 text-indigo-600">{person.role}</p>
                </div>
              </div>
            </li>
          ))}
          {people4.map((person) => (
            <li key={person.name}>
              <div className="flex items-center gap-x-6">
                <img alt="" src={Sujay} className="h-16 w-16 rounded-full" />
                <div>
                  <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{person.name}</h3>
                  <p className="text-sm font-semibold leading-6 text-indigo-600">{person.role}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
