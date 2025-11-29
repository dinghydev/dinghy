import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const PARTNERS = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;shape=mxgraph.salesforce.partners;',
  },
  _original_width: 60,
  _original_height: 60,
}

export function Partners(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, PARTNERS)} />
}
