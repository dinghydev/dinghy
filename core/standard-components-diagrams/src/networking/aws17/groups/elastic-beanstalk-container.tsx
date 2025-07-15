import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ELASTIC_BEANSTALK_CONTAINER = {
  _style: {
    group:
      'rounded=1;arcSize=10;dashed=0;fillColor=none;gradientColor=none;strokeWidth=2;',
  },
}

export function ElasticBeanstalkContainer(props: DiagramNodeProps) {
  return <Shape {...ELASTIC_BEANSTALK_CONTAINER} {...props} />
}
