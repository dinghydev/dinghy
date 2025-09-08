import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const AD_CONNECTOR = {
  _style: {
    entity:
      'sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#DD344C;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;pointerEvents=1;shape=mxgraph.aws4.ad_connector;',
  },
  _original_width: 78,
  _original_height: 73,
}

export function AdConnector(props: DiagramNodeProps) {
  return (
    <Shape
      {...AD_CONNECTOR}
      {...props}
      _style={extendStyle(AD_CONNECTOR, props)}
    />
  )
}
