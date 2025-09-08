import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const VIDEO_FILE = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#005F4B;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam2.video_file;',
  },
  _original_width: 28.000000000000004,
  _original_height: 39,
}

export function VideoFile(props: DiagramNodeProps) {
  return (
    <Shape {...VIDEO_FILE} {...props} _style={extendStyle(VIDEO_FILE, props)} />
  )
}
