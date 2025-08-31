import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const MESSENGER = {
  _style:
    'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.messenger',
  _width: 82.60000000000001,
  _height: 76.80000000000001,
}

export function Messenger(props: DiagramNodeProps) {
  return (
    <Shape {...MESSENGER} {...props} _style={extendStyle(MESSENGER, props)} />
  )
}
