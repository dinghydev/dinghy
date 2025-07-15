import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const STORSIMPLE = {
  _style:
    'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;strokeColor=none;fillColor=#00BEF2;shape=mxgraph.azure.storsimple;',
  _width: 50,
  _height: 45,
}

export function Storsimple(props: DiagramNodeProps) {
  return <Shape {...STORSIMPLE} {...props} />
}
