import Text from './text'

const OrgCard = ({ data }) => (
  <div className='org-card-container'>
    <div className='org-logo-container'>
      <img className='org-logo' src={data.logoUrl} />
    </div>
    <Text type='h5' style={{
      textAlign: 'center',
      color: '#C4C4C4'
    }}>{ data.name }</Text>

    <style jsx>{`
      .org-card-container {
        padding: 16px;
      }
      .org-logo-container {
        width: 120px;
        height: 120px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 20px;
        background-color: white;
        margin: auto;
        margin-bottom: 8px;
      }
      .org-logo {
        width: 60px;
        height: 60px;
      }
    `}</style>
  </div>
)

export default OrgCard