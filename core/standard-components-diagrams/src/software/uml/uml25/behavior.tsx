import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const BEHAVIOR = {
  _style:
    'shape=note2;boundedLbl=1;whiteSpace=wrap;html=1;size=25;verticalAlign=top;align=left;spacingLeft=5;',
  _width: 0,
  _height: 60,
}

export function Behavior(props: DiagramNodeProps) {
  return (
    <Shape {...BEHAVIOR} {...props} _style={extendStyle(BEHAVIOR, props)} />
  )
}
