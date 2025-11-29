import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const EDUCATION = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;shape=mxgraph.salesforce.education;',
  },
  _original_width: 60,
  _original_height: 40.2,
}

export function Education(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, EDUCATION)} />
}
