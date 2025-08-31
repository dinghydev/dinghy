import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const GITHUB = {
  _style:
    'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.github',
  _width: 60,
  _height: 60,
}

export function Github(props: DiagramNodeProps) {
  return <Shape {...GITHUB} {...props} _style={extendStyle(GITHUB, props)} />
}
