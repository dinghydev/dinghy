import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const THERMISTOR_WITH_INDEPENDENT_INTEGRAL_HEATER = {
  _style: {
    entity:
      'shape=mxgraph.electrical.abstract.thermistor_with_independent_integral_heater;html=1;shadow=0;dashed=0;strokeWidth=1;align=center;overflow=fill;fontSize=12;',
  },
  _original_width: 100,
  _original_height: 94.25,
}

export function ThermistorWithIndependentIntegralHeater(props: NodeProps) {
  return (
    <Shape
      {...props}
      _style={extendStyle(props, THERMISTOR_WITH_INDEPENDENT_INTEGRAL_HEATER)}
    />
  )
}
