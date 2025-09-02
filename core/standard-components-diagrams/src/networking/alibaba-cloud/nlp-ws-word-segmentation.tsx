import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const NLP_WS_WORD_SEGMENTATION = {
  _style: {
    entity:
      'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.nlp-ws_word_segmentation;',
  },
  _original_width: 47.400000000000006,
  _original_height: 47.400000000000006,
}

export function NlpWsWordSegmentation(props: DiagramNodeProps) {
  return (
    <Shape
      {...NLP_WS_WORD_SEGMENTATION}
      {...props}
      _style={extendStyle(NLP_WS_WORD_SEGMENTATION, props)}
    />
  )
}
