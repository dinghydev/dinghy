import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const PLATFORM = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;shape=mxgraph.salesforce.platform;',
  },
  _width: 39,
  _height: 60,
}

export function Platform(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, PLATFORM)} />
}
