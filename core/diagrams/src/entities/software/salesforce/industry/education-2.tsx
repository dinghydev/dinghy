import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const EDUCATION_2 = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;shape=mxgraph.salesforce.education2;',
  },
  _original_width: 60,
  _original_height: 60,
}

export function Education2(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, EDUCATION_2)} />
}
