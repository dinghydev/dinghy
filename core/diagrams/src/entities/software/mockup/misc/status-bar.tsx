import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const STATUS_BAR = {
  _style: {
    entity:
      'strokeWidth=1;shadow=0;dashed=0;align=center;html=1;shape=mxgraph.mockup.misc.rrect;rSize=0;strokeColor=#999999;fillColor=#ffffff;',
  },
  _width: 500,
  _height: 30,
}

export function StatusBar(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, STATUS_BAR)} />
}
