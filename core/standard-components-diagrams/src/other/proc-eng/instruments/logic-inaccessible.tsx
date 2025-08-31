import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const LOGIC_INACCESSIBLE = {
  _style:
    'html=1;outlineConnect=0;align=center;dashed=0;aspect=fixed;shape=mxgraph.pid2inst.logic;mounting=inaccessible',
  _width: 60,
  _height: 60,
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
