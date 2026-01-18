import { Shape } from '@dinghy/base-components'

const TagLevel1 = (props: any) => <Shape {...props} />
const TagLevel2 = (props: any) => <TagLevel1 {...props} />

export default () => (
  <Shape _title='Tags example'>
    <TagLevel2 />
  </Shape>
)
