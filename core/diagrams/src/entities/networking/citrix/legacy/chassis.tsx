import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CHASSIS = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;sketch=0;aspect=fixed;html=1;verticalAlign=top;strokeColor=none;align=center;outlineConnect=0;shape=mxgraph.citrix.chassis;',
  },
  _width: 137.5,
  _height: 177.5,
}

export function Chassis(props: NodeProps) {
  return <Shape {...CHASSIS} {...props} _style={extendStyle(CHASSIS, props)} />
}
