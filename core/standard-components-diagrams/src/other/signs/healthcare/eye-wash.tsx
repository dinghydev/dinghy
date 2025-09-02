import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const EYE_WASH = {
  _style: {
    entity:
      'shape=mxgraph.signs.healthcare.eye_wash;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _original_width: 93,
  _original_height: 99,
}

export function EyeWash(props: DiagramNodeProps) {
  return (
    <Shape {...EYE_WASH} {...props} _style={extendStyle(EYE_WASH, props)} />
  )
}
