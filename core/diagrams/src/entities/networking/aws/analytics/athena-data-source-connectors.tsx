import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ATHENA_DATA_SOURCE_CONNECTORS = {
  _style: {
    entity:
      'sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#8C4FFF;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;pointerEvents=1;shape=mxgraph.aws4.athena_data_source_connectors;',
  },
  _original_width: 77,
  _original_height: 78,
}

export function AthenaDataSourceConnectors(props: NodeProps) {
  return (
    <Shape
      {...props}
      _style={extendStyle(props, ATHENA_DATA_SOURCE_CONNECTORS)}
    />
  )
}
