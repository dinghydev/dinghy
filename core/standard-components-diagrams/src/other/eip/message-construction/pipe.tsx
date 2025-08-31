import { Dependency, extendStyle } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const PIPE = {
  _style: {
    dependency:
      'edgeStyle=none;html=1;strokeColor=#808080;endArrow=block;endSize=10;dashed=0;verticalAlign=bottom;strokeWidth=2;',
  },
}

export function Pipe(props: DiagramNodeProps) {
  return <Dependency {...PIPE} {...props} _style={extendStyle(PIPE, props)} />
}
