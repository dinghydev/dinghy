import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SHARED_CONTROL_DISPLAY_IN_DCS_FIELD = {
  _style:
    'html=1;outlineConnect=0;align=center;dashed=0;aspect=fixed;shape=mxgraph.pid2inst.sharedCont;mounting=field',
  _width: 50,
  _height: 50,
}

export function SharedControlDisplayInDcsField(props: DiagramNodeProps) {
  return <Shape {...SHARED_CONTROL_DISPLAY_IN_DCS_FIELD} {...props} />
}
