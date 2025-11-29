import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const KNEADER = {
  _style: {
    entity:
      'shape=mxgraph.pid.mixers.kneader;html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  },
  _width: 170,
  _height: 100,
}

export function Kneader(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, KNEADER)} />
}
