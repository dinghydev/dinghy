import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const REPORTING = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;sketch=0;aspect=fixed;html=1;verticalAlign=top;strokeColor=none;align=center;outlineConnect=0;shape=mxgraph.citrix.reporting;',
  },
  _width: 61.5,
  _height: 69,
}

export function Reporting(props: DiagramNodeProps) {
  return (
    <Shape {...REPORTING} {...props} _style={extendStyle(REPORTING, props)} />
  )
}
