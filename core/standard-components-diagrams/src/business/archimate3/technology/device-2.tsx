import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const DEVICE_2 = {
  _style:
    'html=1;outlineConnect=0;whiteSpace=wrap;fillColor=#AFFFAF;shape=mxgraph.archimate3.device;',
  _width: 70,
  _height: 35,
}

export function Device2(props: DiagramNodeProps) {
  return <Shape {...DEVICE_2} {...props} />
}
