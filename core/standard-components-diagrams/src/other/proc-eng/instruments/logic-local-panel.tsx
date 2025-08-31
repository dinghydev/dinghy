import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const LOGIC_LOCAL_PANEL = {
  _style:
    'html=1;outlineConnect=0;align=center;dashed=0;aspect=fixed;shape=mxgraph.pid2inst.logic;mounting=local',
  _width: 60,
  _height: 60,
}

export function LogicLocalPanel(props: DiagramNodeProps) {
  return (
    <Shape
      {...LOGIC_LOCAL_PANEL}
      {...props}
      _style={extendStyle(LOGIC_LOCAL_PANEL, props)}
    />
  )
}
