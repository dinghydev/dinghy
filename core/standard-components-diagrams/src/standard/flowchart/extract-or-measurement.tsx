import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const EXTRACT_OR_MEASUREMENT = {
  _style: {
    entity:
      'strokeWidth=2;html=1;shape=mxgraph.flowchart.extract_or_measurement;whiteSpace=wrap;',
  },
  _original_width: 95,
  _original_height: 60,
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
