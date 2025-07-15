import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ELASTIC_FILE_SYSTEM_ELASTIC_THROUGHPUT = {
  _style:
    'sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#7AA116;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;pointerEvents=1;shape=mxgraph.aws4.elastic_file_system_elastic_throughput;',
  _width: 78,
  _height: 76,
}

export function ElasticFileSystemElasticThroughput(props: DiagramNodeProps) {
  return <Shape {...ELASTIC_FILE_SYSTEM_ELASTIC_THROUGHPUT} {...props} />
}
