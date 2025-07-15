import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const GITHUB = {
  _style:
    'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.github',
  _width: 75,
  _height: 75,
}

export function Github(props: DiagramNodeProps) {
  return <Shape {...GITHUB} {...props} />
}
