import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SINGLE_FLANGE = {
  _style:
    'verticalLabelPosition=bottom;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.fittings.single_flange;',
  _width: 5,
  _height: 50,
}

export function SingleFlange(props: DiagramNodeProps) {
  return <Shape {...SINGLE_FLANGE} {...props} />
}
