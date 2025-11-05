import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const MOBSEC = {
  _style: {
    entity:
      'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.mobsec;',
  },
  _original_width: 51,
  _original_height: 43.199999999999996,
}

export function Mobsec(props: NodeProps) {
  return <Shape {...MOBSEC} {...props} _style={extendStyle(MOBSEC, props)} />
}
