import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ARROWS_SYSTEM = {
  _style: {
    entity:
      'sketch=0;html=1;aspect=fixed;strokeColor=none;shadow=0;fillColor=#3B8DF1;verticalAlign=top;labelPosition=center;verticalLabelPosition=bottom;shape=mxgraph.gcp2.arrows_system',
  },
  _width: 100,
  _height: 95,
}

export function ArrowsSystem(props: DiagramNodeProps) {
  return (
    <Shape
      {...ARROWS_SYSTEM}
      {...props}
      _style={extendStyle(ARROWS_SYSTEM, props)}
    />
  )
}
