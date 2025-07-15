import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const PUBLIC_CLOUD = {
  _style:
    'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;outlineConnect=0;verticalAlign=top;align=center;shape=mxgraph.office.clouds.public_cloud;',
  _width: 101,
  _height: 81,
}

export function PublicCloud(props: DiagramNodeProps) {
  return <Shape {...PUBLIC_CLOUD} {...props} />
}
