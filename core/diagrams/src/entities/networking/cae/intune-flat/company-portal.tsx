import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const COMPANY_PORTAL = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;fillColor=#505050;shape=mxgraph.mscae.intune.company_portal',
  },
  _width: 50,
  _height: 38,
}

export function CompanyPortal(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, COMPANY_PORTAL)} />
}
