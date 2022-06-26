import { mount } from '@vue/test-utils'
import AccountView from '@/views/AccountView.vue'
import NoteCardList from '@/components/NoteCardList'
import NoteCreateCard from '@/components/NoteCreateCard'

describe('Testing Persons.vue', () => {
  it('should show page title', () => {
    // when
    const wrapper = mount(AccountView)

    // then
    expect(wrapper.text()).toMatch('AccountView')
  })

  it('should have persons card list component', () => {
    // when
    const wrapper = mount(AccountView)

    // then
    const cardList = wrapper.findComponent(NoteCardList)
    expect(cardList.exists()).toBeTruthy()
  })

  it('should have persons create form component', () => {
    // when
    const wrapper = mount(AccountView)

    // then
    const createForm = wrapper.findComponent(NoteCreateCard)
    expect(createForm.exists()).toBeTruthy()
  })
})
