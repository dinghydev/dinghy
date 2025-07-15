import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const OVERGROUND_ENCLOSURE = {
  _style:
    'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.transmission.overground_enclosure;',
  _width: 130,
  _height: 136,
}

export function OvergroundEnclosure(props: DiagramNodeProps) {
  return <Shape {...OVERGROUND_ENCLOSURE} {...props} />
}
