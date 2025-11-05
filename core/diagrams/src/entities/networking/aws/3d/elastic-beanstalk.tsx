import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ELASTIC_BEANSTALK = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;html=1;verticalAlign=top;strokeWidth=1;align=center;outlineConnect=0;dashed=0;outlineConnect=0;shape=mxgraph.aws3d.elasticBeanstalk;fillColor=#ECECEC;strokeColor=#5E5E5E;aspect=fixed;',
  },
  _width: 182,
  _height: 140,
}

export function ElasticBeanstalk(props: NodeProps) {
  return (
    <Shape
      {...ELASTIC_BEANSTALK}
      {...props}
      _style={extendStyle(ELASTIC_BEANSTALK, props)}
    />
  )
}
