import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const FERRITE_CORE = {
  _style: {
    entity:
      'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.inductors.ferrite_core;',
  },
  _width: 64,
  _height: 4,
}

export function FerriteCore(props: DiagramNodeProps) {
  return (
    <Shape
      {...FERRITE_CORE}
      {...props}
      _style={extendStyle(FERRITE_CORE, props)}
    />
  )
}
