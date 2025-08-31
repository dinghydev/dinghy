import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const VIDEO_WORKLOAD = {
  _style:
    'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.communications.video_workload;',
  _width: 57,
  _height: 50,
}

export function VideoWorkload(props: DiagramNodeProps) {
  return (
    <Shape
      {...VIDEO_WORKLOAD}
      {...props}
      _style={extendStyle(VIDEO_WORKLOAD, props)}
    />
  )
}
