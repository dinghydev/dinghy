import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CODEPIPELINE = {
  _style: {
    entity:
      'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.codepipeline;',
  },
  _original_width: 41.1,
  _original_height: 52.2,
}

export function Codepipeline(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, CODEPIPELINE)} />
}
