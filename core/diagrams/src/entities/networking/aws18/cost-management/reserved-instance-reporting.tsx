import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const RESERVED_INSTANCE_REPORTING = {
  _style: {
    entity:
      'sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;strokeColor=#ffffff;fillColor=#232F3E;dashed=0;verticalLabelPosition=middle;verticalAlign=bottom;align=center;html=1;whiteSpace=wrap;fontSize=10;fontStyle=1;spacing=3;shape=mxgraph.aws4.productIcon;prIcon=mxgraph.aws4.reserved_instance_reporting;',
  },
  _width: 80,
  _height: 120,
}

export function ReservedInstanceReporting(props: DiagramNodeProps) {
  return (
    <Shape
      {...RESERVED_INSTANCE_REPORTING}
      {...props}
      _style={extendStyle(RESERVED_INSTANCE_REPORTING, props)}
    />
  )
}
