import { mount } from '@vue/test-utils'
import NoteCardList from '@/components/NoteCardList'
import NoteCard from '@/components/NoteCard'

describe('Testing NoteCardList.vue', () => {
  it('should render a note card', () => {
    // when
    const wrapper = mount(NoteCardList, {
      propsData: {
        notes: [
          {
            id: 4,
            title: 'Urlaubsziele',
            body: 'Vietnam, Korea, Japan',
            done: false
          },
          {
            id: 5,
            title: 'Webtech Projekt',
            body: 'Meilenstein 3',
            done: false
          }
        ]
      }
    })

    // then
    const noteCards = wrapper.findAllComponents(NoteCard)
    expect(noteCards.length).toBe(2)
  })
})
