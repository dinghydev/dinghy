import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const DATA = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;shape=mxgraph.salesforce.data;',
  },
  _original_width: 48.6,
  _original_height: 60,
}

export function Data(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, DATA)} />
}
