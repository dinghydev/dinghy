import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const REGISTRATION = {
  _style: {
    entity:
      'shape=mxgraph.signs.healthcare.registration;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _original_width: 96,
  _original_height: 98,
}

export function Registration(props: DiagramNodeProps) {
  return (
    <Shape
      {...REGISTRATION}
      {...props}
      _style={extendStyle(REGISTRATION, props)}
    />
  )
}
