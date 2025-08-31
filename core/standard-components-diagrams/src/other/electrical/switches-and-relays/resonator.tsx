import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const RESONATOR = {
  _style: {
    entity:
      'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.electro-mechanical.resonator;',
  },
  _width: 100,
  _height: 50,
}

export function Resonator(props: DiagramNodeProps) {
  return (
    <Shape {...RESONATOR} {...props} _style={extendStyle(RESONATOR, props)} />
  )
}
