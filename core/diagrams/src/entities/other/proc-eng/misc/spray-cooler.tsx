import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SPRAY_COOLER = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;outlineConnect=0;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.misc.spray_cooler;',
  },
  _width: 100,
  _height: 120,
}

export function SprayCooler(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, SPRAY_COOLER)} />
}
