import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const FC_FUNCTION_COMPUTE = {
  _style: {
    entity:
      'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.fc_function_compute;',
  },
  _original_width: 51.6,
  _original_height: 51.3,
}

export function FcFunctionCompute(props: DiagramNodeProps) {
  return (
    <Shape
      {...FC_FUNCTION_COMPUTE}
      {...props}
      _style={extendStyle(FC_FUNCTION_COMPUTE, props)}
    />
  )
}
