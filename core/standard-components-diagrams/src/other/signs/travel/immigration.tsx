import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const IMMIGRATION = {
  _style:
    'shape=mxgraph.signs.travel.immigration;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  _width: 94,
  _height: 99,
}

export function Immigration(props: DiagramNodeProps) {
  return (
    <Shape
      {...IMMIGRATION}
      {...props}
      _style={extendStyle(IMMIGRATION, props)}
    />
  )
}
