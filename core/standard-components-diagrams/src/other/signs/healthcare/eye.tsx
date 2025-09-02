import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const EYE = {
  _style: {
    entity:
      'shape=mxgraph.signs.healthcare.eye;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _original_width: 99,
  _original_height: 55,
}

export function Eye(props: DiagramNodeProps) {
  return <Shape {...EYE} {...props} _style={extendStyle(EYE, props)} />
}
