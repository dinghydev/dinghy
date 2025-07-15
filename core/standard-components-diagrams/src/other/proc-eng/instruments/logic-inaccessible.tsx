import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const LOGIC_INACCESSIBLE = {
  _style:
    'html=1;outlineConnect=0;align=center;dashed=0;aspect=fixed;shape=mxgraph.pid2inst.logic;mounting=inaccessible',
  _width: 50,
  _height: 50,
}

export function LogicInaccessible(props: DiagramNodeProps) {
  return <Shape {...LOGIC_INACCESSIBLE} {...props} />
}
