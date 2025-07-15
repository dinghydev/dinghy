import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const INTERCHANGEABLE_DISC_BLIND_DISC = {
  _style:
    'verticalLabelPosition=bottom;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.fittings.interchangeable_disc_(blind_disc)2;',
  _width: 40,
  _height: 140,
}

export function InterchangeableDiscBlindDisc(props: DiagramNodeProps) {
  return <Shape {...INTERCHANGEABLE_DISC_BLIND_DISC} {...props} />
}
