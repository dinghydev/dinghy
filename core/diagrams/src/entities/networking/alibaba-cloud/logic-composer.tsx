import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const LOGIC_COMPOSER = {
  _style: {
    entity:
      'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.logic_composer;',
  },
  _original_width: 53.7,
  _original_height: 53.4,
}

export function LogicComposer(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, LOGIC_COMPOSER)} />
}
