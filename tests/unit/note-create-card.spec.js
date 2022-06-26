import { mount } from '@vue/test-utils'
import NoteCreateCard from '@/components/NoteCreateCard'

describe('Testing NoteCreateCard.vue', () => {
  it('should not show form by default', () => {
    // when
    const wrapper = mount(NoteCreateCard)

    // then
    expect(wrapper.find('#exampleModal').classes()).not.toContain('show')
  })
})
