import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const AUTO_SCALING_GROUP = {
  _style: {
    group:
      'sketch=0;outlineConnect=0;gradientColor=none;html=1;whiteSpace=wrap;fontSize=12;fontStyle=0;shape=mxgraph.aws4.groupCenter;grIcon=mxgraph.aws4.group_auto_scaling_group;grStroke=0;strokeColor=#B6BABF;fillColor=#47515E;verticalAlign=top;align=center;fontColor=#B6BABF;dashed=0;spacingTop=25;',
    entity: {
      strokeColor: '#B6BABF',
      fillColor: '#47515E',
      fontColor: '#B6BABF',
    },
  },
}

export function AutoScalingGroup(props: DiagramNodeProps) {
  return <Shape {...AUTO_SCALING_GROUP} {...props} />
}
