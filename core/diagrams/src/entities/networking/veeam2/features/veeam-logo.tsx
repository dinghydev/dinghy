import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const VEEAM_LOGO = {
  _style: {
    entity:
      'pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#13B24B;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam2.veeam_logo;',
  },
  _width: 136,
  _height: 24,
}

export function VeeamLogo(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, VEEAM_LOGO)} />
}
