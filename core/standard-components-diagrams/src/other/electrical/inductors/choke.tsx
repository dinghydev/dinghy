import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CHOKE = {
  _style: {
    entity:
      'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.inductors.choke;',
  },
  _width: 100,
  _height: 200,
}

export function Choke(props: DiagramNodeProps) {
  return <Shape {...CHOKE} {...props} _style={extendStyle(CHOKE, props)} />
}
