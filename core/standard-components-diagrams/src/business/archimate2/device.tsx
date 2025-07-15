import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const DEVICE = {
  _style:
    'html=1;outlineConnect=0;whiteSpace=wrap;fillColor=#99ff99;shape=mxgraph.archimate.tech;techType=device',
  _width: 100,
  _height: 75,
}

export function Device(props: DiagramNodeProps) {
  return <Shape {...DEVICE} {...props} />
}
