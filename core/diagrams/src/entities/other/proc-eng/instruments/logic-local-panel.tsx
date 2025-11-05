import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const LOGIC_LOCAL_PANEL = {
  _style: {
    entity:
      'html=1;outlineConnect=0;align=center;dashed=0;aspect=fixed;shape=mxgraph.pid2inst.logic;mounting=local',
  },
  _original_width: 50,
  _original_height: 50,
}

export function LogicLocalPanel(props: NodeProps) {
  return (
    <Shape
      {...LOGIC_LOCAL_PANEL}
      {...props}
      _style={extendStyle(LOGIC_LOCAL_PANEL, props)}
    />
  )
}
