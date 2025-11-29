import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const THERMOSTAT_OFF = {
  _style: {
    entity:
      'html=1;shape=mxgraph.electrical.electro-mechanical.thermostat2;aspect=fixed;elSwitchState=off;',
  },
  _width: 75,
  _height: 21,
}

export function ThermostatOff(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, THERMOSTAT_OFF)} />
}
