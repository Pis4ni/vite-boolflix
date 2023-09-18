import { createApp } from 'vue'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import App from './App.vue'

import "../node_modules/flag-icons/css/flag-icons.min.css";

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { faStar as hollowStar } from '@fortawesome/free-regular-svg-icons'
import { faStar as fillStar } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faUserSecret,hollowStar ,fillStar )

const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')
