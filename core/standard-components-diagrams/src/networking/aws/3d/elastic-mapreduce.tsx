import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ELASTIC_MAPREDUCE = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;html=1;verticalAlign=top;strokeWidth=1;align=center;outlineConnect=0;dashed=0;outlineConnect=0;shape=mxgraph.aws3d.elasticMapReduce;fillColor=#ECECEC;strokeColor=#5E5E5E;aspect=fixed;',
  },
  _width: 123,
  _height: 133,
}

export function ElasticMapreduce(props: DiagramNodeProps) {
  return (
    <Shape
      {...ELASTIC_MAPREDUCE}
      {...props}
      _style={extendStyle(ELASTIC_MAPREDUCE, props)}
    />
  )
}
