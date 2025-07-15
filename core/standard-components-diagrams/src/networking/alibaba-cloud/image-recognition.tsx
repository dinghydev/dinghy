import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const IMAGE_RECOGNITION = {
  _style:
    'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.image_recognition;',
  _width: 48.9,
  _height: 47.7,
}

export function ImageRecognition(props: DiagramNodeProps) {
  return <Shape {...IMAGE_RECOGNITION} {...props} />
}
