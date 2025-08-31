import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const NLP_NATURAL_LANGUAGE_PROCESSING = {
  _style: {
    entity:
      'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.nlp_natural_language_processing;',
  },
  _width: 50.099999999999994,
  _height: 55.2,
}

export function NlpNaturalLanguageProcessing(props: DiagramNodeProps) {
  return (
    <Shape
      {...NLP_NATURAL_LANGUAGE_PROCESSING}
      {...props}
      _style={extendStyle(NLP_NATURAL_LANGUAGE_PROCESSING, props)}
    />
  )
}
