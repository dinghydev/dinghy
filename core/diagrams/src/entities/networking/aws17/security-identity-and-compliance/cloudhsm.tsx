import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CLOUDHSM = {
  _style: {
    entity:
      'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.cloudhsm;fillColor=#759C3E;gradientColor=none;',
  },
  _original_width: 73.5,
  _original_height: 84,
}

export function Cloudhsm(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, CLOUDHSM)} />
}
