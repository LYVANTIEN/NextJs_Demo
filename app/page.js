'use client';
import Image from 'next/image';
import { useEffect } from 'react';

export default function Profile() {
  useEffect(() => {
    // Hiệu ứng hover cho nút
    const buttons = document.querySelectorAll('.hover-bg');
    buttons.forEach(button => {
      button.addEventListener('mouseenter', () => {
        button.style.backgroundColor = '#FF6347'; // Tomato
      });
      button.addEventListener('mouseleave', () => {
        button.style.backgroundColor = '#FF4500'; // OrangeRed
      });
    });

    // Hiệu ứng cho thẻ profile
    const profileCard = document.querySelector('.profile-card');
    profileCard.addEventListener('mouseover', () => {
      profileCard.style.transform = 'scale(1.05)';
      profileCard.style.boxShadow = '0 20px 30px rgba(0, 0, 0, 0.2)';
    });
    profileCard.addEventListener('mouseout', () => {
      profileCard.style.transform = 'scale(1)';
      profileCard.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.1)';
    });

    // Hiển thị thanh kỹ năng
    const skillBars = document.querySelectorAll('.skill-bar');
    skillBars.forEach(bar => {
      const percentage = bar.getAttribute('data-percentage');
      bar.style.width = percentage;
    });

    // Hiệu ứng cuộn mượt cho anchor links
    const anchors = document.querySelectorAll('a[href^="#"]');
    anchors.forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });

  }, []);

  return (
    <main style={styles.main}>
      <title>Ly Van Tien - Profile</title>
      <div className="profile-card" style={styles.profileCard}>
        <div style={styles.header}>
          <div style={styles.imageContainer}>
            <Image src="/image/aaa.jpg" alt="Profile Picture" width={150} height={150} style={styles.image} />
          </div>
          <div style={styles.headerText}>
            <h2 style={styles.name}>Ly Van Tien</h2>
            <p style={styles.jobTitle}>Web Developer</p>
          </div>
        </div>
        <nav style={styles.nav}>
          <ul style={styles.navList}>
            <li style={styles.navItem}><a href="#introduction" className="navLink" style={styles.navLink}>Introduce Yourself</a></li>
            <li style={styles.navItem}><a href="#background" className="navLink" style={styles.navLink}>Personal Background</a></li>
            <li style={styles.navItem}><a href="#skills" className="navLink" style={styles.navLink}>Skills</a></li>
            <li style={styles.navItem}><a href="#experience" className="navLink" style={styles.navLink}>Work Experience</a></li>
            <li style={styles.navItem}><a href="#education" className="navLink" style={styles.navLink}>Study</a></li>
            <li style={styles.navItem}><a href="#desire" className="navLink" style={styles.navLink}>Desire</a></li>
            <li style={styles.navItem}><a href="#contact" className="navLink" style={styles.navLink}>Contact Info</a></li>
          </ul>
        </nav>
        <section id="introduction" style={styles.section}>
          <h3 style={styles.sectionTitle}>Introduce Yourself</h3>
          <p style={styles.sectionText}>
            With extensive knowledge including programming languages such as C, Java, front end and back end. Knowledge of web development and programming.
          </p>
        </section>
        <section id="background" style={styles.section}>
          <h3 style={styles.sectionTitle}>Personal Background</h3>
          <p style={styles.sectionText}>Gender: Male</p>
          <p style={styles.sectionText}>Date of Birth: December 21, 2001</p>
          <p style={styles.sectionText}>Address: 42 Tran Viet Chau, An Hoa, Ninh Kieu, Can Tho</p>
        </section>
        <section id="skills" style={styles.section}>
          <h3 style={styles.sectionTitle}>Skills</h3>
          <div style={styles.skillsContainer}>
            
            
            <div style={styles.skillItem}>
              <p>Java</p>
              <div style={styles.skillBarContainer}>
                <div className="skill-bar" style={styles.skillBar} data-percentage="85%"></div>
              </div>
            </div>
            <div style={styles.skillItem}>
              <p>HTML/CSS</p>
              <div style={styles.skillBarContainer}>
                <div className="skill-bar" style={styles.skillBar} data-percentage="60%"></div>
              </div>
            </div>
            <div style={styles.skillItem}>
              <p>JavaScript</p>
              <div style={styles.skillBarContainer}>
                <div className="skill-bar" style={styles.skillBar} data-percentage="55%"></div>
              </div>
            </div>
            <div style={styles.skillItem}>
              <p>C# .Net</p>
              <div style={styles.skillBarContainer}>
                <div className="skill-bar" style={styles.skillBar} data-percentage="90%"></div>
              </div>
            </div>
          </div>
        </section>
        <section id="experience" style={styles.section}>
          <h3 style={styles.sectionTitle}>Work Experience</h3>
          <div style={styles.experienceItem}>
            <h4>Certificates:</h4>
            <ul>
              <li>Web Design for Everybody: Basics of Web Development & Coding (Coursera)</li>
              <li>Software Development Lifecycle (Coursera)</li>
              <li>Computer Communications (Coursera)</li>
              <li>CertNexus Certified Ethical Emerging Technologist (Coursera)</li>
            </ul>
          </div>
          <div style={styles.experienceItem}>
            <h4>Projects during study:</h4>
            <ul>
              <li>Movie theater management website (C# .Net)</li>
              <li>Website selling sneakers (Java JSP Servlet)</li>
              <li>Website Trek-Booking booking with 3D view (.Net, Next.Js)</li>
            </ul>
          </div>
        </section>
        <section id="education" style={styles.section}>
          <h3 style={styles.sectionTitle}>Study</h3>
          <p style={styles.sectionText}>Software engineering major at Can Tho FPT - University</p>
          <p style={styles.sectionText}>Expected to graduate in 2024</p>
          <p style={styles.sectionText}>High School - Tran Dai Nghia</p>
          <p style={styles.sectionText}>Graduated 2019</p>
        </section>
        <section id="desire" style={styles.section}>
          <h3 style={styles.sectionTitle}>Desire</h3>
          <p style={styles.sectionText}>
            Desire to do an internship to gain more practical knowledge about how to operate as well as how to work in reality that the Software Engineering industry needs to meet.
          </p>
          <p style={styles.sectionText}>Desired position: Web Developer</p>
        </section>
        <section id="contact" style={styles.section}>
          <h3 style={styles.sectionTitle}>Contact Info</h3>
          <p style={styles.sectionText}>Phone: 0913 477 124</p>
          <p style={styles.sectionText}>Email: <a href="mailto:vantien2112@gmail.com" style={styles.link}>vantien2112@gmail.com</a></p>
          <p style={styles.sectionText}>Facebook: @Tiền Văn</p>
          <p style={styles.sectionText}>Instagram: @LyTien</p>
        </section>
        <div style={styles.buttonContainer}>
          <a href="https://www.facebook.com/profile.php?id=100025326151812" target="_blank" rel="noopener noreferrer" style={styles.button} className="hover-bg">
            Visit Facebook
          </a>
        </div>
      </div>
    </main>
  );
}

const styles = {
  main: {
    backgroundImage: 'url(/path-to-your-background-image.jpg)',
    backgroundColor: '#f0f2f5',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
  },
  profileCard: {
    maxWidth: '1000px',
    width: '100%',
    backgroundColor: '#fff',
    boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)',
    borderRadius: '1rem',
    padding: '32px',
    transition: 'transform 0.3s, box-shadow 0.3s',
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '24px',
  },
  imageContainer: {
    height: '150px',
    width: '150px',
    borderRadius: '50%',
    backgroundColor: '#d1d5db',
    overflow: 'hidden',
    marginRight: '24px',
  },
  image: {
    borderRadius: '50%',
  },
  headerText: {
    textAlign: 'left',
  },
  name: {
    fontSize: '2rem',
    fontWeight: '700',
    color: '#1f2937',
  },
  jobTitle: {
    fontSize: '1rem',
    fontWeight: '500',
    color: '#4b5563',
  },
  nav: {
    marginBottom: '24px',
  },
  navList: {
    display: 'flex',
    justifyContent: 'space-around',
    listStyleType: 'none',
    padding: 0,
  },
  navItem: {
    margin: '0 10px',
  },
  navLink: {
    fontSize: '1rem',
    fontWeight: '500',
    color: '#3B82F6',
    textDecoration: 'none',
    transition: 'color 0.3s',
  },
  navLinkHover: {
    color: '#2563EB',
  },
  section: {
    marginBottom: '24px',
  },
  sectionTitle: {
    fontSize: '1.5rem',
    fontWeight: '700',
    color: '#1f2937',
    marginBottom: '16px',
  },
  sectionText: {
    fontSize: '1rem',
    color: '#4b5563',
    marginBottom: '8px',
  },
  skillsContainer: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '16px',
  },
  skillItem: {
    marginBottom: '8px',
  },
  skillBarContainer: {
    backgroundColor: '#e5e7eb',
    borderRadius: '9999px',
    overflow: 'hidden',
    height: '8px',
    marginTop: '4px',
  },
  skillBar: {
    backgroundColor: '#3B82F6',
    height: '100%',
    transition: 'width 1s ease-in-out',
  },
  experienceItem: {
    marginBottom: '16px',
  },
  link: {
    color: '#3B82F6',
  },
  buttonContainer: {
    marginTop: '16px',
    display: 'flex',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#FF4500', // OrangeRed
    color: '#fff',
    fontWeight: '700',
    padding: '12px 24px',
    borderRadius: '9999px',
    transition: 'background-color 0.3s',
  },
};
