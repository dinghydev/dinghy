import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const FNF_SERVERLESS_FUNCTION_FLOW = {
  _style: {
    entity:
      'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.fnf_serverless_function_flow;',
  },
  _original_width: 48,
  _original_height: 55.5,
}

export function FnfServerlessFunctionFlow(props: NodeProps) {
  return (
    <Shape
      {...FNF_SERVERLESS_FUNCTION_FLOW}
      {...props}
      _style={extendStyle(FNF_SERVERLESS_FUNCTION_FLOW, props)}
    />
  )
}
