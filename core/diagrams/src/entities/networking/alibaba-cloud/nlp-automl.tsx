import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const NLP_AUTOML = {
  _style: {
    entity:
      'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.nlp-automl;',
  },
  _original_width: 48.300000000000004,
  _original_height: 47.1,
}

export function NlpAutoml(props: NodeProps) {
  return (
    <Shape {...NLP_AUTOML} {...props} _style={extendStyle(NLP_AUTOML, props)} />
  )
}
