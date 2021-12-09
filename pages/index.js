import Link from 'next/link'
import { useRouter } from 'next/router'
// import { Button } from '@material-ui/core'
// import { makeStyles } from '@material-ui/core/styles'

import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import { Header } from '../components/Header'
import { Footer } from '../components/Footer'

// const useStyles = makeStyles({
//     test:{
//         backgroundColor:'red'
//     }
// })
const Homepage = () => {
    // const classes = useStyles();
  const router = useRouter()
  const { t } = useTranslation('common')

  return (
    <>
      <main>
        <Header heading={t('h1')} title={t('title')} />
        {/* <div className={classes.test}> */}
          <Link
            href='/'
            locale={router.locale === 'en' ? 'de' : 'en'}
          >
            <button>
              {t('change-locale')}
            </button>
          </Link>
          <Link href='/second-page'>
            <button
              type='button'
            >
              {t('to-second-page')}
            </button>
          </Link>
        {/* </div> */}
      </main>
      <Footer />
    </>
  )
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale, ['common', 'footer']),
  },
})

export default Homepage
