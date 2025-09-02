import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CAR = {
  _style: {
    entity:
      'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.car;fillColor=#5294CF;gradientColor=none;',
  },
  _original_width: 79.5,
  _original_height: 79.5,
}

export function Car(props: DiagramNodeProps) {
  return <Shape {...CAR} {...props} _style={extendStyle(CAR, props)} />
}
