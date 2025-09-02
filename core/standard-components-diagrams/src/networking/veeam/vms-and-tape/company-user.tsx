import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const COMPANY_USER = {
  _style: {
    entity:
      'shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#4495D1;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.company_user;',
  },
  _original_width: 44.4,
  _original_height: 48.8,
}

export function CompanyUser(props: DiagramNodeProps) {
  return (
    <Shape
      {...COMPANY_USER}
      {...props}
      _style={extendStyle(COMPANY_USER, props)}
    />
  )
}
