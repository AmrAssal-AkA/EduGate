import React from 'react'

const resources = [
	{
		category: 'eBooks',
		items: [
			{
				title: 'Advanced Mathematics for Engineers',
				description:
					'Explore the complex world of engineering mathematics with this comprehensive guide.',
				image:
					'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80',
			},
			{
				title: 'The Art of Public Speaking',
				description:
					'Master the skills needed to captivate an audience and deliver powerful speeches.',
				image:
					'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
			},
			{
				title: 'Introduction to AI and Machine Learning',
				description:
					'Discover the fundamentals of artificial intelligence and machine learning concepts.',
				image:
					'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=400&q=80',
			},
		],
		button: 'View More eBooks',
	},
	{
		category: 'Articles',
		items: [
			{
				title: 'Data Visualization Techniques',
				description:
					'Learn about the latest techniques and tools for effective data visualization.',
				image:
					'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80',
			},
			{
				title: 'Modern Architecture Design',
				description:
					'Explore the innovative designs shaping the future of architecture.',
				image:
					'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=400&q=80',
			},
			{
				title: 'Sustainable Energy Solutions',
				description:
					'Delve into the world of sustainable energy and its impact on the environment.',
				image:
					'https://images.unsplash.com/photo-1509395176047-4a66953fd231?auto=format&fit=crop&w=400&q=80',
			},
		],
		button: 'View More Articles',
	},
	{
		category: 'Videos',
		items: [
			{
				title: 'Python Programming Tutorial',
				description: 'Follow this step-by-step guide to master Python programming.',
				image:
					'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80',
			},
			{
				title: 'The History of Art',
				description:
					'A documentary exploring the evolution of art through the ages.',
				image:
					'https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=400&q=80',
			},
			{
				title: 'Robotics and AI',
				description:
					'An in-depth look into the advancements in robotics and artificial intelligence.',
				image:
					'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80',
			},
		],
		button: 'View More Videos',
	},
	{
		category: 'Downloadable Content',
		items: [
			{
				title: 'Machine Learning Fundamentals - PDF',
				description:
					'Download the essential guide to understanding machine learning basics.',
				image:
					'https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=400&q=80',
			},
			{
				title: 'Financial Analysis - Excel Sheet',
				description:
					'Get the latest financial analysis tools and templates in Excel format.',
				image:
					'https://images.unsplash.com/photo-1515168833906-d2a3b82b3029?auto=format&fit=crop&w=400&q=80',
			},
			{
				title: 'Effective Communication Skills - Word Doc',
				description:
					'Enhance your communication skills with this detailed Word document.',
				image:
					'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80',
			},
		],
		button: 'View More Downloads',
	},
]

function Resources() {
	return (
		<div className="bg-gray-50 min-h-screen pb-10">
			<div className="max-w-7xl mx-auto px-4 py-8">
				<input
					type="text"
					placeholder="Search resources..."
					className="w-full mb-8 px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400"
				/>
				{resources.map(section => (
					<div key={section.category} className="mb-10">
						<h2 className="text-xl font-semibold mb-4">
							{section.category}
						</h2>
						<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
							{section.items.map((item, idx) => (
								<div
									key={idx}
									className="bg-white rounded-2xl shadow p-4 flex flex-col hover:shadow-lg transition"
								>
									<img
										src={item.image}
										alt={item.title}
										className="w-full h-36 object-cover rounded-xl mb-4"
									/>
									<h3 className="font-bold text-base mb-1">
										{item.title}
									</h3>
									<p className="text-gray-600 text-sm">
										{item.description}
									</p>
								</div>
							))}
						</div>
						<button className="w-full mt-6 bg-lime-500 hover:bg-lime-600 text-white font-semibold py-2 rounded-full transition">
							{section.button}
						</button>
					</div>
				))}
			</div>
		</div>
	)
}

export default Resources

