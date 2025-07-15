import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const VIDEO_PLAY = {
  _style:
    'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.concepts.video_play;',
  _width: 50,
  _height: 40,
}

export function VideoPlay(props: DiagramNodeProps) {
  return <Shape {...VIDEO_PLAY} {...props} />
}
