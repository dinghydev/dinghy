import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const BEHAVIOR = {
  _style: {
    entity:
      'shape=note2;boundedLbl=1;whiteSpace=wrap;html=1;size=25;verticalAlign=top;align=left;spacingLeft=5;',
  },
  _original_width: 0,
  _original_height: 60,
}

export function Behavior(props: DiagramNodeProps) {
  return (
    <Shape {...BEHAVIOR} {...props} _style={extendStyle(BEHAVIOR, props)} />
  )
}
