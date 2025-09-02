import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const MAN_WOMAN = {
  _style: {
    entity:
      'shape=mxgraph.cisco.people.man_woman;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  },
  _original_width: 106,
  _original_height: 155,
}

export function ManWoman(props: DiagramNodeProps) {
  return (
    <Shape {...MAN_WOMAN} {...props} _style={extendStyle(MAN_WOMAN, props)} />
  )
}
