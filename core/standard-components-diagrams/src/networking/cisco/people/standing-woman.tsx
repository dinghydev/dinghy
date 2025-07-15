import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const STANDING_WOMAN = {
  _style:
    'shape=mxgraph.cisco.people.standing_woman;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  _width: 22,
  _height: 62,
}

export function StandingWoman(props: DiagramNodeProps) {
  return <Shape {...STANDING_WOMAN} {...props} />
}
