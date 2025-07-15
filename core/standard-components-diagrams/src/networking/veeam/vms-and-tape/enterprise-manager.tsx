import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ENTERPRISE_MANAGER = {
  _style:
    'shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#EF8F21;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.enterprise_manager;',
  _width: 44.8,
  _height: 44.8,
}

export function EnterpriseManager(props: DiagramNodeProps) {
  return <Shape {...ENTERPRISE_MANAGER} {...props} />
}
