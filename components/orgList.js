import OrgCard from './orgCard'

import { useSelector } from 'react-redux'

const OrgList = () => {
	// const orgListData = useSelector(state => state.org)

  return (
		<div>
			<div className='org-list-container'>
				<div className='org-list'>
					{[
						{
							name: 'Blockstack Indonesia',
							logoUrl: 'https://blog.blockstack.org/wp-content/uploads/2018/11/Blockstack-Icon-2.png'
						},
						{
							name: 'Degree',
							logoUrl: 'https://i.ibb.co/VJt6k4G/Group-234.png'
						},
						{
							name: 'Blockstack Indonesia',
							logoUrl: 'https://blog.blockstack.org/wp-content/uploads/2018/11/Blockstack-Icon-2.png'
						},
						{
							name: 'Degree',
							logoUrl: 'https://i.ibb.co/VJt6k4G/Group-234.png'
						},
						{
							name: 'Blockstack Indonesia',
							logoUrl: 'https://blog.blockstack.org/wp-content/uploads/2018/11/Blockstack-Icon-2.png'
						},
						{
							name: 'Degree',
							logoUrl: 'https://i.ibb.co/VJt6k4G/Group-234.png'
						},
						{
							name: 'Blockstack Indonesia',
							logoUrl: 'https://blog.blockstack.org/wp-content/uploads/2018/11/Blockstack-Icon-2.png'
						},
						{
							name: 'Degree',
							logoUrl: 'https://i.ibb.co/VJt6k4G/Group-234.png'
						},{
							name: 'Blockstack Indonesia',
							logoUrl: 'https://blog.blockstack.org/wp-content/uploads/2018/11/Blockstack-Icon-2.png'
						},
						{
							name: 'Degree',
							logoUrl: 'https://i.ibb.co/VJt6k4G/Group-234.png'
						}
					].map((data, idx) => (
						<div className='org-card'>
							<OrgCard key={idx} data={data} />
						</div>
					))}
				</div>
			</div>

			<style jsx>{`
				.org-list {
					display: flex;
					flex-wrap: wrap;
				}
				.org-card {
					flex: 1;
					flex-grow: 0;
					flex-basis: ${100/6}%;
				}
			`}</style>
		</div>
	)
}

export default OrgList