import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const BUILDING = {
  _style: {
    entity:
      'shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#4495D1;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.building;',
  },
  _original_width: 63.2,
  _original_height: 55.2,
}

export function Building(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, BUILDING)} />
}
