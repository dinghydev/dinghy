import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const PROGRAMMABLE_LOGIC_CONTROL_INACCESSIBLE = {
  _style: {
    entity:
      'html=1;outlineConnect=0;align=center;dashed=0;aspect=fixed;shape=mxgraph.pid2inst.progLogCont;mounting=inaccessible',
  },
  _original_width: 50,
  _original_height: 50,
}

export function ProgrammableLogicControlInaccessible(props: NodeProps) {
  return (
    <Shape
      {...props}
      _style={extendStyle(props, PROGRAMMABLE_LOGIC_CONTROL_INACCESSIBLE)}
    />
  )
}
