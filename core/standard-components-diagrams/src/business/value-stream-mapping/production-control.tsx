import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const PRODUCTION_CONTROL = {
  _style: {
    entity:
      'strokeWidth=2;html=1;shape=mxgraph.lean_mapping.schedule;whiteSpace=wrap;align=center;',
  },
  _original_width: 100,
  _original_height: 70,
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
