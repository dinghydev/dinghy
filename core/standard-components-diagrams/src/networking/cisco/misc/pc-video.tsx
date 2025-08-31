import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const PC_VIDEO = {
  _style:
    'shape=mxgraph.cisco.misc.pc_video;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  _width: 61,
  _height: 53,
}

export function PcVideo(props: DiagramNodeProps) {
  return (
    <Shape {...PC_VIDEO} {...props} _style={extendStyle(PC_VIDEO, props)} />
  )
}
