import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const STREAMER = {
  _style:
    'shape=mxgraph.cisco.misc.streamer;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  _width: 93,
  _height: 64,
}

export function Streamer(props: DiagramNodeProps) {
  return <Shape {...STREAMER} {...props} />
}
