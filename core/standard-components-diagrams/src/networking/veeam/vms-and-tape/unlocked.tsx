import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const UNLOCKED = {
  _style:
    'shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#EF8F21;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.unlocked;',
  _width: 41.6,
  _height: 34.8,
}

export function Unlocked(props: DiagramNodeProps) {
  return (
    <Shape {...UNLOCKED} {...props} _style={extendStyle(UNLOCKED, props)} />
  )
}
