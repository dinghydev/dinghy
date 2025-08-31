import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const EXTRACT_OR_MEASUREMENT = {
  _style:
    'strokeWidth=2;html=1;shape=mxgraph.flowchart.extract_or_measurement;whiteSpace=wrap;',
  _width: 95,
  _height: 60,
}

export function ExtractOrMeasurement(props: DiagramNodeProps) {
  return (
    <Shape
      {...EXTRACT_OR_MEASUREMENT}
      {...props}
      _style={extendStyle(EXTRACT_OR_MEASUREMENT, props)}
    />
  )
}
