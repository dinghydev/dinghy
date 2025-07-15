import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const TAPE_EJECT = {
  _style:
    'shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#4495D1;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.2d.tape_ejecting;',
  _width: 75.6,
  _height: 49.6,
}

export function TapeEject(props: DiagramNodeProps) {
  return <Shape {...TAPE_EJECT} {...props} />
}
