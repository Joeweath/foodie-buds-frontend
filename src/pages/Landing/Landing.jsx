import styles from './Landing.module.css'

const Landing = ({ user }) => {
  return (
    <main className={styles.container}>
      
      {!user ? 
      <div>
        <h1>Foodie Buds</h1>
        <button>Log In</button>
        <button>Sign Up</button>  
      </div>
      : <div>
          <h1>Foodie Buds</h1>
        </div> }
    </main>
  )
}

export default Landing
