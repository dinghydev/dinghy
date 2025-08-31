import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SENSOR = {
  _style:
    'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.sensor;fillColor=#5294CF;gradientColor=none;',
  _width: 76.5,
  _height: 90,
}

export function Sensor(props: DiagramNodeProps) {
  return <Shape {...SENSOR} {...props} _style={extendStyle(SENSOR, props)} />
}
