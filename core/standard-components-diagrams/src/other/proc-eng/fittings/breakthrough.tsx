import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const BREAKTHROUGH = {
  _style:
    'verticalLabelPosition=bottom;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.fittings.breakthrough2;',
  _width: 38,
  _height: 100,
}

export function Breakthrough(props: DiagramNodeProps) {
  return (
    <Shape
      {...BREAKTHROUGH}
      {...props}
      _style={extendStyle(BREAKTHROUGH, props)}
    />
  )
}
