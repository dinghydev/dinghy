import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const COMPANY_ADMINISTRATOR = {
  _style:
    'shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#4495D1;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.company_administrator;',
  _width: 44.4,
  _height: 48.8,
}

export function CompanyAdministrator(props: DiagramNodeProps) {
  return (
    <Shape
      {...COMPANY_ADMINISTRATOR}
      {...props}
      _style={extendStyle(COMPANY_ADMINISTRATOR, props)}
    />
  )
}
