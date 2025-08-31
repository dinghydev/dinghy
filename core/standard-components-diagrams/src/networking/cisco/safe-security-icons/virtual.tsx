import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const VIRTUAL = {
  _style:
    'verticalLabelPosition=bottom;sketch=0;html=1;fillColor=#282828;strokeColor=none;verticalAlign=top;pointerEvents=1;align=center;shape=mxgraph.cisco_safe.security_icons.virtual;',
  _width: 60,
  _height: 60,
}

export function Virtual(props: DiagramNodeProps) {
  return <Shape {...VIRTUAL} {...props} _style={extendStyle(VIRTUAL, props)} />
}
