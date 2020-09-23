import ExtLink from './ext-link'

export default () => (
  <>
    <footer>
      {/* <span>Deploy your own!</span> */}

      <ExtLink href="https://vercel.com/import/git?s=https://github.com/ijjk/notion-blog/tree/master&env=NOTION_TOKEN,BLOG_INDEX_ID&envDescription=Required+env+values+for+deploying&envLink=https://github.com/ijjk/notion-blog%23getting-blog-index-and-token">
        <img
          src="/vercel-and-notion.png"
          // height="85"
          width="125"
          alt="Vercel + Notion"
        />
      </ExtLink>

      {/* <span>
        or{' '}
        <ExtLink href="https://github.com/ijjk/notion-blog">
          view source
        </ExtLink>
      </span> */}
    </footer>
  </>
)
