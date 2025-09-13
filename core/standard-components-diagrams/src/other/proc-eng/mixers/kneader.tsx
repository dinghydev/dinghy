import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const KNEADER = {
  _style: {
    entity:
      'shape=mxgraph.pid.mixers.kneader;html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  },
  _width: 170,
  _height: 100,
}

export function Kneader(props: DiagramNodeProps) {
  return <Shape {...KNEADER} {...props} _style={extendStyle(KNEADER, props)} />
}
