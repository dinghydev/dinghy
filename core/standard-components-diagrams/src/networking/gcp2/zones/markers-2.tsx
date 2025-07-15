import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const MARKERS_2 = {
  _style:
    'strokeColor=none;fillColor=none;fontColor=#757575;align=left;html=1;fontStyle=0;fontSize=11;',
  _width: 7,
  _height: 50,
}

export function Markers2(props: DiagramNodeProps) {
  return <Shape {...MARKERS_2} {...props} />
}
