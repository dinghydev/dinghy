import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const ATTENUATOR = {
  _style: {
    entity:
      'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.resistors.attenuator;',
  },
  _width: 100,
  _height: 60,
}

export function Attenuator(props: DiagramNodeProps) {
  return (
    <Shape {...ATTENUATOR} {...props} _style={extendStyle(ATTENUATOR, props)} />
  )
}
