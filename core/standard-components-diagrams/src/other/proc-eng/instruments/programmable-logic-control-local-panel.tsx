import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const PROGRAMMABLE_LOGIC_CONTROL_LOCAL_PANEL = {
  _style: {
    entity:
      'html=1;outlineConnect=0;align=center;dashed=0;aspect=fixed;shape=mxgraph.pid2inst.progLogCont;mounting=local',
  },
  _original_width: 50,
  _original_height: 50,
}

export function ProgrammableLogicControlLocalPanel(props: DiagramNodeProps) {
  return (
    <Shape
      {...PROGRAMMABLE_LOGIC_CONTROL_LOCAL_PANEL}
      {...props}
      _style={extendStyle(PROGRAMMABLE_LOGIC_CONTROL_LOCAL_PANEL, props)}
    />
  )
}
