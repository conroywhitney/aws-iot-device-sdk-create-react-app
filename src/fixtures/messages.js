import faker from 'faker'
import moment from 'moment'
import { times } from 'ramda'
import uuidV4 from 'uuid/v4'

const fakeMessage = () => ({
  id: uuidV4(),
  time: moment(),
  username: faker.internet.userName(),
  content: faker.lorem.paragraph()
})

export default times(fakeMessage)
