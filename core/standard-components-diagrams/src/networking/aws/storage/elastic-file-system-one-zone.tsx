import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ELASTIC_FILE_SYSTEM_ONE_ZONE = {
  _style: {
    entity:
      'sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#7AA116;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;pointerEvents=1;shape=mxgraph.aws4.elastic_file_system_one_zone;',
  },
  _width: 60,
  _height: 60,
}

export function ElasticFileSystemOneZone(props: DiagramNodeProps) {
  return (
    <Shape
      {...ELASTIC_FILE_SYSTEM_ONE_ZONE}
      {...props}
      _style={extendStyle(ELASTIC_FILE_SYSTEM_ONE_ZONE, props)}
    />
  )
}
