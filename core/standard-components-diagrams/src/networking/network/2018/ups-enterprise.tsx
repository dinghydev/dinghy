import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const UPS_ENTERPRISE = {
  _style: {
    entity:
      'fontColor=#0066CC;verticalAlign=top;verticalLabelPosition=bottom;labelPosition=center;align=center;html=1;outlineConnect=0;fillColor=#CCCCCC;strokeColor=#6881B3;gradientColor=none;gradientDirection=north;strokeWidth=2;shape=mxgraph.networks.ups_enterprise;',
  },
  _original_width: 100,
  _original_height: 100,
}

export function UpsEnterprise(props: DiagramNodeProps) {
  return (
    <Shape
      {...UPS_ENTERPRISE}
      {...props}
      _style={extendStyle(UPS_ENTERPRISE, props)}
    />
  )
}
