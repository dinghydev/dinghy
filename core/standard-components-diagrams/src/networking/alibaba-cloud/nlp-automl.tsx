import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const NLP_AUTOML = {
  _style:
    'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.nlp-automl;',
  _width: 48.300000000000004,
  _height: 47.1,
}

export function NlpAutoml(props: DiagramNodeProps) {
  return <Shape {...NLP_AUTOML} {...props} />
}
