import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const NLP_RA_REFLEXIVE_ANAPHORA = {
  _style:
    'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.nlp-ra_reflexive_anaphora;',
  _width: 47.400000000000006,
  _height: 47.400000000000006,
}

export function NlpRaReflexiveAnaphora(props: DiagramNodeProps) {
  return <Shape {...NLP_RA_REFLEXIVE_ANAPHORA} {...props} />
}
