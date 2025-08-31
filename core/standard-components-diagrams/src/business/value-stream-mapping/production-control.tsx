import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const PRODUCTION_CONTROL = {
  _style:
    'strokeWidth=2;html=1;shape=mxgraph.lean_mapping.schedule;whiteSpace=wrap;align=center;',
  _width: 100,
  _height: 70,
}

export function ProductionControl(props: DiagramNodeProps) {
  return (
    <Shape
      {...PRODUCTION_CONTROL}
      {...props}
      _style={extendStyle(PRODUCTION_CONTROL, props)}
    />
  )
}
