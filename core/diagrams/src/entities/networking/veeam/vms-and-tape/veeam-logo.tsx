import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const VEEAM_LOGO = {
  _style: {
    entity:
      'pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#07B152;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.veeam_logo;',
  },
  _width: 109.6,
  _height: 19.2,
}

export function VeeamLogo(props: NodeProps) {
  return (
    <Shape {...VEEAM_LOGO} {...props} _style={extendStyle(VEEAM_LOGO, props)} />
  )
}
