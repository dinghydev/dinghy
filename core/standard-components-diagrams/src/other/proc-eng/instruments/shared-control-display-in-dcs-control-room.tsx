import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SHARED_CONTROL_DISPLAY_IN_DCS_CONTROL_ROOM = {
  _style:
    'html=1;outlineConnect=0;align=center;dashed=0;aspect=fixed;shape=mxgraph.pid2inst.sharedCont;mounting=room',
  _width: 50,
  _height: 50,
}

export function SharedControlDisplayInDcsControlRoom(props: DiagramNodeProps) {
  return <Shape {...SHARED_CONTROL_DISPLAY_IN_DCS_CONTROL_ROOM} {...props} />
}
