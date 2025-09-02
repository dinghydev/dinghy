import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const COAT_CHECK = {
  _style: {
    entity:
      'shape=mxgraph.signs.travel.coat_check;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _original_width: 100,
  _original_height: 71,
}

export function CoatCheck(props: DiagramNodeProps) {
  return (
    <Shape {...COAT_CHECK} {...props} _style={extendStyle(COAT_CHECK, props)} />
  )
}
