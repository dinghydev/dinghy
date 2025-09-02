import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const LOGIC_FIELD = {
  _style: {
    entity:
      'html=1;outlineConnect=0;align=center;dashed=0;aspect=fixed;shape=mxgraph.pid2inst.logic;mounting=field',
  },
  _original_width: 50,
  _original_height: 50,
}

export function LogicField(props: DiagramNodeProps) {
  return (
    <Shape
      {...LOGIC_FIELD}
      {...props}
      _style={extendStyle(LOGIC_FIELD, props)}
    />
  )
}
