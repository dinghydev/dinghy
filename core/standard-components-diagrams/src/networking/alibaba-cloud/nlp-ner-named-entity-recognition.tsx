import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const NLP_NER_NAMED_ENTITY_RECOGNITION = {
  _style:
    'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.nlp-ner_named_entity_recognition;',
  _width: 47.400000000000006,
  _height: 47.400000000000006,
}

export function NlpNerNamedEntityRecognition(props: DiagramNodeProps) {
  return <Shape {...NLP_NER_NAMED_ENTITY_RECOGNITION} {...props} />
}
