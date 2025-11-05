import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ELASTIC_BEANSTALK_CONTAINER = {
  _style: {
    container:
      'rounded=1;arcSize=10;dashed=0;fillColor=none;gradientColor=none;strokeWidth=2;',
  },
}

export function ElasticBeanstalkContainer(props: NodeProps) {
  return (
    <Shape
      {...ELASTIC_BEANSTALK_CONTAINER}
      {...props}
      _style={extendStyle(ELASTIC_BEANSTALK_CONTAINER, props)}
    />
  )
}
