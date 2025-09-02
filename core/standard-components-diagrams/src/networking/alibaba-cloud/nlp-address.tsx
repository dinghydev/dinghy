import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const NLP_ADDRESS = {
  _style: {
    entity:
      'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.nlp-address;',
  },
  _original_width: 47.400000000000006,
  _original_height: 47.400000000000006,
}

export function NlpAddress(props: DiagramNodeProps) {
  return (
    <Shape
      {...NLP_ADDRESS}
      {...props}
      _style={extendStyle(NLP_ADDRESS, props)}
    />
  )
}
