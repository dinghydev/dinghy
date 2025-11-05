import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const OCR_OPTICAL_CHARACTER_RECOGNITION = {
  _style: {
    entity:
      'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.ocr_optical_character_recognition;',
  },
  _original_width: 60,
  _original_height: 60.6,
}

export function OcrOpticalCharacterRecognition(props: NodeProps) {
  return (
    <Shape
      {...OCR_OPTICAL_CHARACTER_RECOGNITION}
      {...props}
      _style={extendStyle(OCR_OPTICAL_CHARACTER_RECOGNITION, props)}
    />
  )
}
