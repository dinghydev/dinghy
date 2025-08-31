import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const INTENSIVE_CARE = {
  _style: {
    entity:
      'shape=mxgraph.signs.healthcare.intensive_care;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _width: 60,
  _height: 60,
}

export function IntensiveCare(props: DiagramNodeProps) {
  return (
    <Shape
      {...INTENSIVE_CARE}
      {...props}
      _style={extendStyle(INTENSIVE_CARE, props)}
    />
  )
}
