import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const IMAGE_RECOGNITION = {
  _style: {
    entity:
      'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.image_recognition;',
  },
  _original_width: 48.9,
  _original_height: 47.7,
}

export function ImageRecognition(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, IMAGE_RECOGNITION)} />
}
