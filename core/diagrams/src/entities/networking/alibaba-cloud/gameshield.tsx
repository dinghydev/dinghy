import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const GAMESHIELD = {
  _style: {
    entity:
      'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.gameshield;',
  },
  _original_width: 51.3,
  _original_height: 44.4,
}

export function Gameshield(props: NodeProps) {
  return (
    <Shape {...GAMESHIELD} {...props} _style={extendStyle(GAMESHIELD, props)} />
  )
}
