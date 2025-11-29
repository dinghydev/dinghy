import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const STANDING_MAN = {
  _style: {
    entity:
      'shape=mxgraph.cisco.people.standing_man;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  },
  _width: 22,
  _height: 62,
}

export function StandingMan(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, STANDING_MAN)} />
}
