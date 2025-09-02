import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const VEEAM_LOGO = {
  _style: {
    entity:
      'pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#07B152;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.veeam_logo;',
  },
  _original_width: 109.6,
  _original_height: 19.2,
}

export function VeeamLogo(props: DiagramNodeProps) {
  return (
    <Shape {...VEEAM_LOGO} {...props} _style={extendStyle(VEEAM_LOGO, props)} />
  )
}
