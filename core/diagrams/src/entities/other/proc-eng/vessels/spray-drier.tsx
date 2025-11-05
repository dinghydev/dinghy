import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SPRAY_DRIER = {
  _style: {
    entity:
      'shape=mxgraph.pid.vessels.spray_drier;html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  },
  _width: 100,
  _height: 80,
}

export function SprayDrier(props: NodeProps) {
  return (
    <Shape
      {...SPRAY_DRIER}
      {...props}
      _style={extendStyle(SPRAY_DRIER, props)}
    />
  )
}
