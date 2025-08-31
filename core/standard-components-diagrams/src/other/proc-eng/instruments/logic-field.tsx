import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const LOGIC_FIELD = {
  _style: {
    entity:
      'html=1;outlineConnect=0;align=center;dashed=0;aspect=fixed;shape=mxgraph.pid2inst.logic;mounting=field',
  },
  _width: 60,
  _height: 60,
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
