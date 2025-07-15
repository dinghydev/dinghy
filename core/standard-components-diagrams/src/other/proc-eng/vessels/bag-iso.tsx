import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const BAG_ISO = {
  _style:
    'shape=mxgraph.pid.vessels.bag_(iso);html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  _width: 50,
  _height: 95,
}

export function BagIso(props: DiagramNodeProps) {
  return <Shape {...BAG_ISO} {...props} />
}
