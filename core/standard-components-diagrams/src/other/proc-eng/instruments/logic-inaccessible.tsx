import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const LOGIC_INACCESSIBLE = {
  _style: {
    entity:
      'html=1;outlineConnect=0;align=center;dashed=0;aspect=fixed;shape=mxgraph.pid2inst.logic;mounting=inaccessible',
  },
  _original_width: 50,
  _original_height: 50,
}

export function LogicInaccessible(props: DiagramNodeProps) {
  return (
    <Shape
      {...LOGIC_INACCESSIBLE}
      {...props}
      _style={extendStyle(LOGIC_INACCESSIBLE, props)}
    />
  )
}
