import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const APP_GROUP = {
  _style:
    'sketch=0;verticalLabelPosition=bottom;sketch=0;aspect=fixed;html=1;verticalAlign=top;strokeColor=none;fillColor=#000000;align=center;outlineConnect=0;pointerEvents=1;shape=mxgraph.citrix2.app_group;',
  _width: 50,
  _height: 49.325,
}

export function AppGroup(props: DiagramNodeProps) {
  return <Shape {...APP_GROUP} {...props} />
}
