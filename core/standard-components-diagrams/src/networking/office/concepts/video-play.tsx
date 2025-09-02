import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const VIDEO_PLAY = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.concepts.video_play;',
  },
  _original_width: 50,
  _original_height: 40,
}

export function VideoPlay(props: DiagramNodeProps) {
  return (
    <Shape {...VIDEO_PLAY} {...props} _style={extendStyle(VIDEO_PLAY, props)} />
  )
}
