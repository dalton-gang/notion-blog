import Link from 'next/link'
import Header from '../components/header'
import ExtLink from '../components/ext-link'
import Features from '../components/features'
import GitHub from '../components/svgs/github'
import sharedStyles from '../styles/shared.module.css'

export default () => (
  <>
    <Header titlePre="Home" />
    <div className={sharedStyles.layout}>
      <h1>BrainCrumbs</h1>
      <h2>
        {' '}
        <ExtLink
          href="https://github.com/vercel/next.js/issues/9524"
          className="dotted"
          style={{ color: 'inherit' }}
        >
          not a blog
        </ExtLink>
      </h2>

      <div className="explanation">
        <p>:)</p>
      </div>
    </div>
  </>
)
