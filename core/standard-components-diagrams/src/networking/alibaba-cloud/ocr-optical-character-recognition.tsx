import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const OCR_OPTICAL_CHARACTER_RECOGNITION = {
  _style:
    'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.ocr_optical_character_recognition;',
  _width: 60,
  _height: 60.6,
}

export function OcrOpticalCharacterRecognition(props: DiagramNodeProps) {
  return <Shape {...OCR_OPTICAL_CHARACTER_RECOGNITION} {...props} />
}
