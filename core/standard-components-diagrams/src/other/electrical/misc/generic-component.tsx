import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const GENERIC_COMPONENT = {
  _style: {
    entity:
      'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.miscellaneous.generic_component',
  },
  _width: 60,
  _height: 60,
}

export function GenericComponent(props: DiagramNodeProps) {
  return (
    <Shape
      {...GENERIC_COMPONENT}
      {...props}
      _style={extendStyle(GENERIC_COMPONENT, props)}
    />
  )
}
