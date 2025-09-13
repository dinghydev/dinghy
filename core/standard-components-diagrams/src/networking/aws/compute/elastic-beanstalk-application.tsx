import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const ELASTIC_BEANSTALK_APPLICATION = {
  _style: {
    entity:
      'sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#ED7100;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;pointerEvents=1;shape=mxgraph.aws4.application;',
  },
  _width: 31,
  _height: 48,
}

export function ElasticBeanstalkApplication(props: DiagramNodeProps) {
  return (
    <Shape
      {...ELASTIC_BEANSTALK_APPLICATION}
      {...props}
      _style={extendStyle(ELASTIC_BEANSTALK_APPLICATION, props)}
    />
  )
}
