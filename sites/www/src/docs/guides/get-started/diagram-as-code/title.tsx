import { camelCaseToWords, Shape } from '@dinghy/base-components'

const TagLevel1 = (props: any) => <Shape {...props} />
const TagLevel2 = (props: any) => (
  <TagLevel1
    // highlight-next-line
    _title={(node: any) => camelCaseToWords(node._props._tags[1])}
    {...props}
  />
)

export default () => (
  <Shape _title='Title example'>
    <TagLevel2 />
    <Shape>Title as text</Shape>
  </Shape>
)
