import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const SITTING_WOMAN = {
  _style: {
    entity:
      'shape=mxgraph.cisco.people.sitting_woman;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  },
  _original_width: 56,
  _original_height: 90,
}

export function SittingWoman(props: DiagramNodeProps) {
  return (
    <Shape
      {...SITTING_WOMAN}
      {...props}
      _style={extendStyle(SITTING_WOMAN, props)}
    />
  )
}
