import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const COMPANY_OWNER = {
  _style:
    'shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#4495D1;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.company_owner;',
  _width: 44.4,
  _height: 48.8,
}

export function CompanyOwner(props: DiagramNodeProps) {
  return <Shape {...COMPANY_OWNER} {...props} />
}
