import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const ELASTIC_BEANSTALK_CONTAINER_2 = {
  _style: {
    container:
      'dashed=0;html=1;shape=mxgraph.aws3.elastic_beanstalk;fillColor=#F58536;gradientColor=none;dashed=0;',
    entity: {
      fillColor: '#F58536',
    },
  },
}

export function ElasticBeanstalkContainer2(props: DiagramNodeProps) {
  return (
    <Shape
      {...ELASTIC_BEANSTALK_CONTAINER_2}
      {...props}
      _style={extendStyle(ELASTIC_BEANSTALK_CONTAINER_2, props)}
    />
  )
}
