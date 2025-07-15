import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const BAG_FILLING_MACHINE = {
  _style:
    'verticalLabelPosition=bottom;outlineConnect=0;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.misc.bag_filling_machine2;',
  _width: 80,
  _height: 100,
}

export function BagFillingMachine(props: DiagramNodeProps) {
  return <Shape {...BAG_FILLING_MACHINE} {...props} />
}
