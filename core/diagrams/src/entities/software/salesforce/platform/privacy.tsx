import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const PRIVACY = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;shape=mxgraph.salesforce.privacy;',
  },
  _original_width: 46.2,
  _original_height: 60,
}

export function Privacy(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, PRIVACY)} />
}
