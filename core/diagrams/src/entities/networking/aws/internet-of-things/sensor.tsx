import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SENSOR = {
  _style: {
    entity:
      'sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#7AA116;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;pointerEvents=1;shape=mxgraph.aws4.sensor;',
  },
  _original_width: 70,
  _original_height: 78,
}

export function Sensor(props: NodeProps) {
  return <Shape {...SENSOR} {...props} _style={extendStyle(SENSOR, props)} />
}
