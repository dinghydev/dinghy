import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const PROGRAMMABLE_LOGIC_CONTROL_LOCAL_PANEL = {
  _style:
    'html=1;outlineConnect=0;align=center;dashed=0;aspect=fixed;shape=mxgraph.pid2inst.progLogCont;mounting=local',
  _width: 50,
  _height: 50,
}

export function ProgrammableLogicControlLocalPanel(props: DiagramNodeProps) {
  return <Shape {...PROGRAMMABLE_LOGIC_CONTROL_LOCAL_PANEL} {...props} />
}
