import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const REKOGNITION_VIDEO = {
  _style: {
    entity:
      'sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#01A88D;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;pointerEvents=1;shape=mxgraph.aws4.rekognition_video;',
  },
  _original_width: 77,
  _original_height: 78,
}

export function RekognitionVideo(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, REKOGNITION_VIDEO)} />
}
