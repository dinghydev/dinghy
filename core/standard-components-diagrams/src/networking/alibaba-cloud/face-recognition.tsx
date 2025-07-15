import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const FACE_RECOGNITION = {
  _style:
    'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.face_recognition;',
  _width: 47.400000000000006,
  _height: 46.800000000000004,
}

export function FaceRecognition(props: DiagramNodeProps) {
  return <Shape {...FACE_RECOGNITION} {...props} />
}
