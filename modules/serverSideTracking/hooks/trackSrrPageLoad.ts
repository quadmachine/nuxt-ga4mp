const ga4mp = require('@analytics-debugger/ga4mp/dist/ga4mp.umd.js')

export default async () => {
  console.log('track ssr page load *********************** ')

  let ga4track = ga4mp(['G-XXXXXXXXXX'], {
    user_id: undefined,
    client_id: 'whatever_id',
    non_personalized_ads: true,
    debug: true,
    endpoint: 'http://example.com',
  })

  ga4track.setEventsParameter('api_secret', 'whatever_secret')

  ga4track.trackEvent('page_view')
}
