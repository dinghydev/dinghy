import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const APP_WITH_CHANGES = {
  _style:
    'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;fillColor=#505050;shape=mxgraph.mscae.oms.app_with_changes',
  _width: 50,
  _height: 32,
}

export function AppWithChanges(props: DiagramNodeProps) {
  return <Shape {...APP_WITH_CHANGES} {...props} />
}
