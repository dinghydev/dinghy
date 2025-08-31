import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const BAG = {
  _style:
    'shape=mxgraph.pid.vessels.bag;html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  _width: 50,
  _height: 95,
}

export function Bag(props: DiagramNodeProps) {
  return <Shape {...BAG} {...props} _style={extendStyle(BAG, props)} />
}
