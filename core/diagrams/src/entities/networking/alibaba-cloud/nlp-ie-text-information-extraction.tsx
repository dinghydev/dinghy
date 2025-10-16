import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const NLP_IE_TEXT_INFORMATION_EXTRACTION = {
  _style: {
    entity:
      'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.nlp-ie_text_information_extraction;',
  },
  _original_width: 47.400000000000006,
  _original_height: 47.400000000000006,
}

export function NlpIeTextInformationExtraction(props: DiagramNodeProps) {
  return (
    <Shape
      {...NLP_IE_TEXT_INFORMATION_EXTRACTION}
      {...props}
      _style={extendStyle(NLP_IE_TEXT_INFORMATION_EXTRACTION, props)}
    />
  )
}
