import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const RDS_PROXY_INSTANCE = {
  _style: {
    entity:
      'sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#C925D1;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;pointerEvents=1;shape=mxgraph.aws4.rds_proxy;',
  },
  _original_width: 78,
  _original_height: 78,
}

export function RdsProxyInstance(props: DiagramNodeProps) {
  return (
    <Shape
      {...RDS_PROXY_INSTANCE}
      {...props}
      _style={extendStyle(RDS_PROXY_INSTANCE, props)}
    />
  )
}
