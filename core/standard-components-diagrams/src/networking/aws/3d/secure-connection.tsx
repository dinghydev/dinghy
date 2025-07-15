import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SECURE_CONNECTION = {
  _style:
    'verticalLabelPosition=bottom;html=1;verticalAlign=top;strokeWidth=1;align=center;outlineConnect=0;dashed=0;outlineConnect=0;shape=mxgraph.aws3d.secureConnection;fillColor=#000000;strokeColor=#ffffff;aspect=fixed;',
  _width: 56.99999999999999,
  _height: 34,
}

export function SecureConnection(props: DiagramNodeProps) {
  return <Shape {...SECURE_CONNECTION} {...props} />
}
