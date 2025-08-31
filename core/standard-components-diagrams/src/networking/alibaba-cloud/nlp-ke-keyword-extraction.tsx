import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const NLP_KE_KEYWORD_EXTRACTION = {
  _style: {
    entity:
      'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.nlp-ke_keyword_extraction;',
  },
  _width: 47.400000000000006,
  _height: 47.400000000000006,
}

export function NlpKeKeywordExtraction(props: DiagramNodeProps) {
  return (
    <Shape
      {...NLP_KE_KEYWORD_EXTRACTION}
      {...props}
      _style={extendStyle(NLP_KE_KEYWORD_EXTRACTION, props)}
    />
  )
}
