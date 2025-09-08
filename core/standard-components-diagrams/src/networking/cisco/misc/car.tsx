import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const CAR = {
  _style: {
    entity:
      'shape=mxgraph.cisco.misc.car;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  },
  _original_width: 69,
  _original_height: 37,
}

export function Car(props: DiagramNodeProps) {
  return <Shape {...CAR} {...props} _style={extendStyle(CAR, props)} />
}
