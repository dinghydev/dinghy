import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const VIDEO_PLAYER = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;strokeWidth=1;shape=mxgraph.mockup.containers.videoPlayer;strokeColor=#666666;strokeColor2=#008cff;strokeColor3=#c4c4c4;textColor=#666666;fillColor2=#008cff;barHeight=30;barPos=20;',
  },
  _original_width: 300,
  _original_height: 200,
}

export function VideoPlayer(props: DiagramNodeProps) {
  return (
    <Shape
      {...VIDEO_PLAYER}
      {...props}
      _style={extendStyle(VIDEO_PLAYER, props)}
    />
  )
}
