import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const FACE_RECOGNITION = {
  _style: {
    entity:
      'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.face_recognition;',
  },
  _original_width: 47.400000000000006,
  _original_height: 46.800000000000004,
}

export function FaceRecognition(props: DiagramNodeProps) {
  return (
    <Shape
      {...FACE_RECOGNITION}
      {...props}
      _style={extendStyle(FACE_RECOGNITION, props)}
    />
  )
}
