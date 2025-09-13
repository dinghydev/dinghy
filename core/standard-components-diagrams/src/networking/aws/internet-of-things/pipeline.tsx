import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const PIPELINE = {
  _style: {
    entity:
      'sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#7AA116;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;pointerEvents=1;shape=mxgraph.aws4.iot_analytics_pipeline;',
  },
  _width: 78,
  _height: 42,
}

export function Pipeline(props: DiagramNodeProps) {
  return (
    <Shape {...PIPELINE} {...props} _style={extendStyle(PIPELINE, props)} />
  )
}
