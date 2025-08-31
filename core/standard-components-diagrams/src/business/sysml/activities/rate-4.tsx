import { Dependency, extendStyle } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const RATE_4 = {
  _style: {
    dependency:
      'edgeStyle=none;html=1;endArrow=open;endSize=12;verticalAlign=top;labelBackgroundColor=none;',
  },
}

export function Rate4(props: DiagramNodeProps) {
  return (
    <Dependency {...RATE_4} {...props} _style={extendStyle(RATE_4, props)} />
  )
}
