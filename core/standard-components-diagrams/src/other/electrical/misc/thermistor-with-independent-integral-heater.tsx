import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const THERMISTOR_WITH_INDEPENDENT_INTEGRAL_HEATER = {
  _style:
    'shape=mxgraph.electrical.abstract.thermistor_with_independent_integral_heater;html=1;shadow=0;dashed=0;strokeWidth=1;align=center;overflow=fill;fontSize=12;',
  _width: 100,
  _height: 94.25,
}

export function ThermistorWithIndependentIntegralHeater(
  props: DiagramNodeProps,
) {
  return <Shape {...THERMISTOR_WITH_INDEPENDENT_INTEGRAL_HEATER} {...props} />
}
