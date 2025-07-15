import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const TRUSTED_ADVISOR = {
  _style:
    'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.trusted_advisor;fillColor=#759C3E;gradientColor=none;',
  _width: 67.5,
  _height: 81,
}

export function TrustedAdvisor(props: DiagramNodeProps) {
  return <Shape {...TRUSTED_ADVISOR} {...props} />
}
