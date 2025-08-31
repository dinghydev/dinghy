import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const HANDLE_WITH_CARE = {
  _style:
    'shape=mxgraph.signs.safety.handle_with_care;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  _width: 91,
  _height: 99,
}

export function HandleWithCare(props: DiagramNodeProps) {
  return (
    <Shape
      {...HANDLE_WITH_CARE}
      {...props}
      _style={extendStyle(HANDLE_WITH_CARE, props)}
    />
  )
}
