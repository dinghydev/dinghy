import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ACTIVITY_FINAL = {
  _style:
    'html=1;shape=mxgraph.sysml.actFinal;strokeWidth=2;verticalLabelPosition=bottom;verticalAlignment=top;',
  _width: 40,
  _height: 40,
}

export function ActivityFinal(props: DiagramNodeProps) {
  return <Shape {...ACTIVITY_FINAL} {...props} />
}
