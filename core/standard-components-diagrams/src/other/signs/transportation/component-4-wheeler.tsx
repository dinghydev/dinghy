import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const COMPONENT_4_WHEELER = {
  _style:
    'shape=mxgraph.signs.transportation.4_wheeler;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  _width: 98,
  _height: 71,
}

export function Component4Wheeler(props: DiagramNodeProps) {
  return (
    <Shape
      {...COMPONENT_4_WHEELER}
      {...props}
      _style={extendStyle(COMPONENT_4_WHEELER, props)}
    />
  )
}
