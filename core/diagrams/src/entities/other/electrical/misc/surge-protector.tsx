import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SURGE_PROTECTOR = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;fillColor=strokeColor;html=1;verticalAlign=top;strokeWidth=1;shape=mxgraph.electrical.miscellaneous.surge_protector;',
  },
  _width: 70,
  _height: 20,
}

export function SurgeProtector(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, SURGE_PROTECTOR)} />
}
