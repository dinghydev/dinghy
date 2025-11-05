import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const BAG_FILLING_MACHINE = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;outlineConnect=0;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.misc.bag_filling_machine2;',
  },
  _width: 80,
  _height: 100,
}

export function BagFillingMachine(props: NodeProps) {
  return (
    <Shape
      {...BAG_FILLING_MACHINE}
      {...props}
      _style={extendStyle(BAG_FILLING_MACHINE, props)}
    />
  )
}
