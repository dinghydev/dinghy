import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const LOG_SEARCH = {
  _style:
    'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;fillColor=#505050;shape=mxgraph.mscae.oms.log_search',
  _width: 60,
  _height: 60,
}

export function LogSearch(props: DiagramNodeProps) {
  return (
    <Shape {...LOG_SEARCH} {...props} _style={extendStyle(LOG_SEARCH, props)} />
  )
}
