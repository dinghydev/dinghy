import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const COMMAND_CENTER = {
  _style:
    'verticalLabelPosition=bottom;sketch=0;aspect=fixed;html=1;verticalAlign=top;strokeColor=none;align=center;outlineConnect=0;shape=mxgraph.citrix.command_center;',
  _width: 75.5,
  _height: 96,
}

export function CommandCenter(props: DiagramNodeProps) {
  return <Shape {...COMMAND_CENTER} {...props} />
}
