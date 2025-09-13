import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const STANDING_MAN = {
  _style: {
    entity:
      'shape=mxgraph.cisco.people.standing_man;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  },
  _width: 22,
  _height: 62,
}

export function StandingMan(props: DiagramNodeProps) {
  return (
    <Shape
      {...STANDING_MAN}
      {...props}
      _style={extendStyle(STANDING_MAN, props)}
    />
  )
}
