import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CLOUD = {
  _style:
    'shape=mxgraph.cisco.storage.cloud;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  _width: 186,
  _height: 106,
}

export function Cloud(props: DiagramNodeProps) {
  return <Shape {...CLOUD} {...props} />
}
