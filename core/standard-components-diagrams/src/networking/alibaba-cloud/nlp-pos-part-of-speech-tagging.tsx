import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const NLP_POS_PART_OF_SPEECH_TAGGING = {
  _style:
    'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.nlp-pos_part-of-speech_tagging;',
  _width: 47.400000000000006,
  _height: 47.400000000000006,
}

export function NlpPosPartOfSpeechTagging(props: DiagramNodeProps) {
  return <Shape {...NLP_POS_PART_OF_SPEECH_TAGGING} {...props} />
}
