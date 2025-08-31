import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const HQ_ENTERPRISE = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;sketch=0;aspect=fixed;html=1;verticalAlign=top;strokeColor=none;align=center;outlineConnect=0;shape=mxgraph.citrix.hq_enterprise;',
  },
  _width: 92,
  _height: 88,
}

export function HqEnterprise(props: DiagramNodeProps) {
  return (
    <Shape
      {...HQ_ENTERPRISE}
      {...props}
      _style={extendStyle(HQ_ENTERPRISE, props)}
    />
  )
}
