import { mount } from '@vue/test-utils'
import NoteCard from '@/components/NoteCard'

describe('Testing NoteCard.vue', () => {
  it('should render title and body', () => {
    // when
    const testNote = {
      id: 4,
      title: 'Urlaubsziele',
      body: 'Vietnam, Korea, Japan',
      done: true
    }
    const wrapper = mount(NoteCard, {
      propsData: {
        note: testNote
      }
    })

    // then
    const cardTitle = wrapper.find('.card-title')
    expect(cardTitle.text()).toBe('Urlaubsziele')
  })

  it.each`
    done       | expected
    ${true}    | ${'erledigt'}
    ${false}   | ${' nicht erledigt'}
  `('should render status of note', ({ done, expected }) => {
    // when
    const testNote = {
      id: 4,
      title: 'Urlaubsziele',
      body: 'Vietnam, Korea, Japan',
      done: true
    }
    const wrapper = mount(NoteCard, {
      propsData: {
        note: testNote
      }
    })

    // then
    const cardTitle = wrapper.find('.card-footer')
    expect(cardTitle.text()).toContain(`${expected}`)
  })
})
