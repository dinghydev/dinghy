import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SHARED_CONTROL_DISPLAY_IN_DCS_LOCAL_PANEL = {
  _style:
    'html=1;outlineConnect=0;align=center;dashed=0;aspect=fixed;shape=mxgraph.pid2inst.sharedCont;mounting=local',
  _width: 50,
  _height: 50,
}

export function SharedControlDisplayInDcsLocalPanel(props: DiagramNodeProps) {
  return <Shape {...SHARED_CONTROL_DISPLAY_IN_DCS_LOCAL_PANEL} {...props} />
}
