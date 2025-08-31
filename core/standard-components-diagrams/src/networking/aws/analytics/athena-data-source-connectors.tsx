import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ATHENA_DATA_SOURCE_CONNECTORS = {
  _style: {
    entity:
      'sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#8C4FFF;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;pointerEvents=1;shape=mxgraph.aws4.athena_data_source_connectors;',
  },
  _width: 77,
  _height: 78,
}

export function AthenaDataSourceConnectors(props: DiagramNodeProps) {
  return (
    <Shape
      {...ATHENA_DATA_SOURCE_CONNECTORS}
      {...props}
      _style={extendStyle(ATHENA_DATA_SOURCE_CONNECTORS, props)}
    />
  )
}
