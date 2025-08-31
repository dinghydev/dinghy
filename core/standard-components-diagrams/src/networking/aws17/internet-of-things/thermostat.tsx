import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const THERMOSTAT = {
  _style:
    'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.thermostat;fillColor=#5294CF;gradientColor=none;',
  _width: 60,
  _height: 60,
}

export function Thermostat(props: DiagramNodeProps) {
  return (
    <Shape {...THERMOSTAT} {...props} _style={extendStyle(THERMOSTAT, props)} />
  )
}
