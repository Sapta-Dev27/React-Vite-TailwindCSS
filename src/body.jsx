import { ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Front-End Development',
    description:
      'Front-end development offers essential services to create interactive and visually appealing web experiences. These services include responsive web design for seamless viewing on all devices, UI/UX design for intuitive user interactions.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Back-End Development',
    description:
      'Back-end development provides critical services for building robust and scalable web applications. These services include server-side programming to manage application logic and database interactions, database design and management for efficient data storage and retrieval, and API development for seamless communication between front-end and back-end systems.',
    icon: LockClosedIcon,
  },
  {
    name: 'App Development',
    description:
      'App development offers comprehensive services to create functional and engaging mobile applications. These services include concept development and prototyping, UI/UX design for intuitive user experiences, and cross-platform development for both iOS and Android.',
    icon: ArrowPathIcon,
  },
  {
    name: 'Web3 Developement',
    description:
      'Web3 development offers innovative services to build decentralized applications (dApps) leveraging blockchain technology. These services include smart contract development for secure and automated transactions, blockchain integration for data transparency and immutability, and decentralized finance (DeFi) solutions.',
    icon: FingerPrintIcon,
  },
]

export default function Example5() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">Explore Us</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Know About our Services
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
           At DEVx AVES , with a collaborative spirit and a relentless drive for excellence, we tackle the toughest challenges and create solutions that make a difference. Our team thrives on creativity, integrity, and a shared vision of a better, more connected world. Join us on our journey to innovate beyond code and shape the future, one line at a time
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <feature.icon aria-hidden="true" className="h-6 w-6 text-white" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
