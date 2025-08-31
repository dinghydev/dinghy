import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const FUNCTION = {
  _style: {
    entity:
      'shape=mxgraph.electrical.abstract.function;html=1;shadow=0;dashed=0;align=center;strokeWidth=1;fontSize=24',
  },
  _width: 60,
  _height: 60,
}

export function Function(props: DiagramNodeProps) {
  return (
    <Shape {...FUNCTION} {...props} _style={extendStyle(FUNCTION, props)} />
  )
}
