import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const JOBS = {
  _style:
    'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;fillColor=#505050;shape=mxgraph.mscae.oms.jobs',
  _width: 60,
  _height: 60,
}

export function Jobs(props: DiagramNodeProps) {
  return <Shape {...JOBS} {...props} _style={extendStyle(JOBS, props)} />
}
