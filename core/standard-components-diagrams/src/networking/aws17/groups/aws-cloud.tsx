import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const AWS_CLOUD = {
  _style: {
    group:
      'dashed=0;html=1;shape=mxgraph.aws3.cloud;fillColor=#F58536;gradientColor=none;dashed=0;',
    entity: {
      fillColor: '#F58536',
    },
  },
}

export function AwsCloud(props: DiagramNodeProps) {
  return <Shape {...AWS_CLOUD} {...props} />
}
