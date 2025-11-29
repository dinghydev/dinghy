import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const APPS = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;aspect=fixed;html=1;shape=mxgraph.salesforce.apps;',
  },
  _width: 34.199999999999996,
  _height: 60,
}

export function Apps(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, APPS)} />
}
