import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const BARREL_DRUM = {
  _style: {
    entity:
      'shape=mxgraph.pid.vessels.barrel,_drum;html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  },
  _width: 62,
  _height: 100,
}

export function BarrelDrum(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, BARREL_DRUM)} />
}
