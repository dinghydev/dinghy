import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ONEDRIVE = {
  _style:
    'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.onedrive;fillColor=#094AB1;strokeColor=none',
  _width: 71.2,
  _height: 43.2,
}

export function Onedrive(props: DiagramNodeProps) {
  return <Shape {...ONEDRIVE} {...props} />
}
