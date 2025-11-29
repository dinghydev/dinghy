import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const EXTRACT_OR_MEASUREMENT = {
  _style: {
    entity:
      'strokeWidth=2;html=1;shape=mxgraph.flowchart.extract_or_measurement;whiteSpace=wrap;',
  },
  _width: 95,
  _height: 60,
}

export function ExtractOrMeasurement(props: NodeProps) {
  return (
    <Shape {...props} _style={extendStyle(props, EXTRACT_OR_MEASUREMENT)} />
  )
}
