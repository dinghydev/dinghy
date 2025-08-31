import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const INFRASTRUCTURE = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#434445;aspect=fixed;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.vvd.infrastructure;',
  },
  _width: 50,
  _height: 48.5,
}

export function Infrastructure(props: DiagramNodeProps) {
  return (
    <Shape
      {...INFRASTRUCTURE}
      {...props}
      _style={extendStyle(INFRASTRUCTURE, props)}
    />
  )
}
